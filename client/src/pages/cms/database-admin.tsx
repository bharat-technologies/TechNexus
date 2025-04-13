import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { ArrowLeft, Table, ArrowDownUp, ChevronDown, X, HardDrive, Database, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { apiRequest } from "@/lib/queryClient";

// Interface for table metadata
interface TableInfo {
  name: string;
  rowCount: number;
  description?: string;
}

// Interface for table data
interface TableData {
  columns: {
    name: string;
    type: string;
    isPrimary: boolean;
    isNullable: boolean;
  }[];
  rows: Record<string, any>[];
}

export default function DatabaseAdminPage() {
  const [activeTab, setActiveTab] = useState<string>("tables");
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [queryInput, setQueryInput] = useState<string>("");
  const [isQueryDialogOpen, setIsQueryDialogOpen] = useState(false);
  const [queryResults, setQueryResults] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch all tables
  const { 
    data: tables, 
    isLoading: isLoadingTables,
    error: tablesError,
    refetch: refetchTables
  } = useQuery({
    queryKey: ['/api/db/tables'],
    queryFn: async () => {
      const response = await fetch('/api/db/tables');
      if (!response.ok) {
        throw new Error('Failed to fetch database tables');
      }
      return response.json();
    }
  });

  // Fetch table data when a table is selected
  const { 
    data: tableData, 
    isLoading: isLoadingTableData,
    error: tableDataError,
    refetch: refetchTableData
  } = useQuery({
    queryKey: ['/api/db/table-data', selectedTable],
    queryFn: async () => {
      if (!selectedTable) {
        return null;
      }
      const response = await fetch(`/api/db/table-data?table=${selectedTable}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch data for table: ${selectedTable}`);
      }
      return response.json();
    },
    enabled: !!selectedTable
  });

  // Execute custom SQL query
  const executeQuery = async () => {
    if (!queryInput.trim()) {
      toast({
        title: "Query is empty",
        description: "Please enter a SQL query to execute",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    setError(null);
    setQueryResults(null);

    try {
      const response = await apiRequest("POST", "/api/db/execute-query", { query: queryInput });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to execute query');
      }
      
      const data = await response.json();
      setQueryResults(data.results);
      
      toast({
        title: "Query executed successfully",
        description: `Query returned ${data.results?.length || 0} rows`,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while executing the query');
      toast({
        title: "Query execution failed",
        description: err instanceof Error ? err.message : 'An error occurred',
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const refreshData = () => {
    refetchTables();
    if (selectedTable) {
      refetchTableData();
    }
    toast({
      title: "Data refreshed",
      description: "Database information has been refreshed",
    });
  };

  // Format value for display
  const formatValue = (value: any) => {
    if (value === null) return <span className="text-gray-400 italic">null</span>;
    if (value === undefined) return <span className="text-gray-400 italic">undefined</span>;
    if (typeof value === 'object') return JSON.stringify(value);
    return String(value);
  };

  return (
    <main className="container mx-auto py-6 max-w-7xl">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Link href="/cms">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Database Administration</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={refreshData}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          <Button onClick={() => setIsQueryDialogOpen(true)}>
            <Database className="h-4 w-4 mr-2" />
            SQL Query
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="tables">
            <Table className="h-4 w-4 mr-2" />
            Tables
          </TabsTrigger>
          <TabsTrigger value="info">
            <HardDrive className="h-4 w-4 mr-2" />
            Database Info
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tables" className="space-y-4">
          {isLoadingTables ? (
            <div className="flex items-center justify-center h-64">
              <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
            </div>
          ) : tablesError ? (
            <div className="bg-red-50 p-4 rounded-md text-red-600">
              <p>Error loading database tables: {tablesError instanceof Error ? tablesError.message : 'Unknown error'}</p>
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {tables?.data && tables.data.map((table: TableInfo) => (
                <Card key={table.name} className="cursor-pointer hover:shadow-md transition-shadow" onClick={() => setSelectedTable(table.name)}>
                  <CardHeader className={`pb-2 ${selectedTable === table.name ? 'bg-black text-white' : ''}`}>
                    <CardTitle className="flex items-center justify-between">
                      <span className="truncate">{table.name}</span>
                      <span className="text-sm font-normal px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full">
                        {table.rowCount} {table.rowCount === 1 ? 'row' : 'rows'}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 pb-3">
                    {table.description ? (
                      <p className="text-sm text-gray-500">{table.description}</p>
                    ) : (
                      <p className="text-sm text-gray-400 italic">No description</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {selectedTable && (
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold flex items-center">
                  <Table className="h-5 w-5 mr-2" />
                  Table: {selectedTable}
                </h2>
                <Button variant="outline" size="sm" onClick={() => setSelectedTable(null)}>
                  <X className="h-4 w-4 mr-2" />
                  Close Table
                </Button>
              </div>

              {isLoadingTableData ? (
                <div className="flex items-center justify-center h-64">
                  <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
                </div>
              ) : tableDataError ? (
                <div className="bg-red-50 p-4 rounded-md text-red-600">
                  <p>Error loading table data: {tableDataError instanceof Error ? tableDataError.message : 'Unknown error'}</p>
                </div>
              ) : tableData?.data && (
                <div className="overflow-auto rounded-md border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-100 border-b">
                        {tableData.data.columns.map((column: {
                          name: string;
                          type: string;
                          isPrimary: boolean;
                          isNullable: boolean;
                        }) => (
                          <th 
                            key={column.name} 
                            className={`px-4 py-3 text-left font-medium text-gray-700 ${
                              column.isPrimary ? 'bg-black text-white' : ''
                            }`}
                          >
                            <div className="flex items-center space-x-1">
                              <span>{column.name}</span>
                              {column.isPrimary && (
                                <span className="text-[10px] ml-1 bg-gray-200 text-gray-700 px-1 py-0.5 rounded">PK</span>
                              )}
                            </div>
                            <div className="text-xs text-gray-500 font-normal">{column.type}</div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.rows.length === 0 ? (
                        <tr>
                          <td 
                            colSpan={tableData.columns.length} 
                            className="px-4 py-8 text-center text-gray-500"
                          >
                            No data in this table
                          </td>
                        </tr>
                      ) : (
                        tableData.rows.map((row: Record<string, any>, rowIndex: number) => (
                          <tr key={rowIndex} className="border-b hover:bg-gray-50">
                            {tableData.columns.map((column: { name: string }) => (
                              <td key={column.name} className="px-4 py-3 align-top">
                                <div className="max-w-xs truncate">
                                  {formatValue(row[column.name])}
                                </div>
                              </td>
                            ))}
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </TabsContent>

        <TabsContent value="info" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Database Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Connection Details</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-gray-50 p-3 rounded">
                    <span className="text-gray-500">Host:</span>
                    <span className="ml-2 font-mono">PostgreSQL (Neon)</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <span className="text-gray-500">Database:</span>
                    <span className="ml-2 font-mono">neondb</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <span className="text-gray-500">Schema:</span>
                    <span className="ml-2 font-mono">public</span>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <span className="text-gray-500">Tables:</span>
                    <span className="ml-2 font-mono">{tables?.data?.length || 0}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Database Schema</h3>
                <div className="bg-gray-50 p-4 rounded-md">
                  <pre className="text-xs overflow-auto font-mono">
                    {tables?.data ? (
                      tables.data.map((table: TableInfo) => `• ${table.name} (${table.rowCount} rows)`).join('\n')
                    ) : (
                      'Loading schema information...'
                    )}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* SQL Query Dialog */}
      <Dialog open={isQueryDialogOpen} onOpenChange={setIsQueryDialogOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Execute SQL Query</DialogTitle>
            <DialogDescription>
              Run a custom SQL query against the database. Be careful with UPDATE, DELETE, and DROP operations.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="query-input">SQL Query</Label>
              <div className="relative">
                <textarea
                  id="query-input"
                  value={queryInput}
                  onChange={(e) => setQueryInput(e.target.value)}
                  placeholder="SELECT * FROM users LIMIT 10;"
                  className="w-full h-32 p-3 border rounded-md font-mono text-sm resize-y focus:ring-black focus:border-black"
                />
              </div>
              <p className="text-xs text-gray-500">
                Tip: Use SELECT queries to safely explore data. Be cautious with data-modifying operations.
              </p>
            </div>

            {error && (
              <div className="bg-red-50 p-3 rounded-md text-red-600 text-sm">
                <p className="font-medium">Error executing query:</p>
                <p>{error}</p>
              </div>
            )}

            {queryResults && (
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Results ({queryResults.length} rows)</h3>
                <div className="overflow-auto max-h-96 rounded-md border">
                  {queryResults.length === 0 ? (
                    <p className="text-center py-4 text-gray-500">Query returned no rows</p>
                  ) : (
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-100 border-b">
                          {Object.keys(queryResults[0]).map((key) => (
                            <th key={key} className="px-4 py-2 text-left font-medium text-gray-700">
                              {key}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {queryResults.map((row, i) => (
                          <tr key={i} className="border-b hover:bg-gray-50">
                            {Object.entries(row).map(([key, value]) => (
                              <td key={key} className="px-4 py-2">
                                {formatValue(value)}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsQueryDialogOpen(false)}>
              Close
            </Button>
            <Button onClick={executeQuery} disabled={isLoading}>
              {isLoading ? (
                <>
                  <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2" />
                  Running...
                </>
              ) : (
                <>
                  Execute Query
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}