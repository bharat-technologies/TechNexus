import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { ArrowLeft, Table, ArrowDownUp, ChevronDown, X, HardDrive, Database, RefreshCw, Plus, Edit, Trash, Trash2, PlusCircle, Save } from "lucide-react";
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
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
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
  const [isAddTableDialogOpen, setIsAddTableDialogOpen] = useState(false);
  const [isAddColumnDialogOpen, setIsAddColumnDialogOpen] = useState(false);
  const [isEditRowDialogOpen, setIsEditRowDialogOpen] = useState(false);
  const [isAddRowDialogOpen, setIsAddRowDialogOpen] = useState(false);
  const [isDropTableDialogOpen, setIsDropTableDialogOpen] = useState(false);
  const [editingRow, setEditingRow] = useState<Record<string, any> | null>(null);
  const [primaryKeyColumn, setPrimaryKeyColumn] = useState<string | null>(null);
  const [newColumn, setNewColumn] = useState<{
    name: string;
    type: string;
    isNullable: boolean;
    isUnique: boolean;
    defaultValue?: string;
  }>({
    name: '',
    type: 'text',
    isNullable: true,
    isUnique: false
  });
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
  
  // Find primary key column from table columns
  useEffect(() => {
    if (tableData?.data?.columns) {
      const pkColumn = tableData.data.columns.find((col: {name: string, isPrimary: boolean}) => col.isPrimary);
      setPrimaryKeyColumn(pkColumn ? pkColumn.name : null);
    }
  }, [tableData]);
  
  // Handle opening the edit row dialog
  const handleEditRow = (row: Record<string, any>) => {
    setEditingRow({...row});
    setIsEditRowDialogOpen(true);
  };
  
  // Handle saving edited row
  const updateRowMutation = useMutation({
    mutationFn: async (data: {
      tableName: string;
      rowData: Record<string, any>;
      primaryKey: string;
      primaryKeyValue: any;
    }) => {
      const response = await apiRequest("POST", "/api/db/update-row", data);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update row');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/db/table-data', selectedTable] });
      toast({
        title: "Row updated",
        description: "Row has been updated successfully",
      });
      setIsEditRowDialogOpen(false);
    },
    onError: (error) => {
      toast({
        title: "Failed to update row",
        description: error instanceof Error ? error.message : "Unknown error occurred",
        variant: "destructive"
      });
    }
  });
  
  const handleSaveRow = () => {
    if (!selectedTable || !primaryKeyColumn || !editingRow) return;
    
    updateRowMutation.mutate({
      tableName: selectedTable,
      rowData: editingRow,
      primaryKey: primaryKeyColumn,
      primaryKeyValue: editingRow[primaryKeyColumn]
    });
  };
  
  // Handle adding new row
  const addRowMutation = useMutation({
    mutationFn: async (data: {
      tableName: string;
      rowData: Record<string, any>;
    }) => {
      const response = await apiRequest("POST", "/api/db/insert-row", data);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to insert row');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/db/table-data', selectedTable] });
      toast({
        title: "Row added",
        description: "New row has been added successfully",
      });
      setIsAddRowDialogOpen(false);
    },
    onError: (error) => {
      toast({
        title: "Failed to add row",
        description: error instanceof Error ? error.message : "Unknown error occurred",
        variant: "destructive"
      });
    }
  });
  
  // Handle deleting a row
  const deleteRowMutation = useMutation({
    mutationFn: async (data: {
      tableName: string;
      primaryKey: string;
      primaryKeyValue: any;
    }) => {
      const response = await apiRequest("DELETE", "/api/db/delete-row", data);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to delete row');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/db/table-data', selectedTable] });
      toast({
        title: "Row deleted",
        description: "Row has been deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Failed to delete row",
        description: error instanceof Error ? error.message : "Unknown error occurred",
        variant: "destructive"
      });
    }
  });
  
  // Handle adding a new column to table
  const addColumnMutation = useMutation({
    mutationFn: async (data: {
      tableName: string;
      column: {
        name: string;
        type: string;
        isNullable?: boolean;
        isUnique?: boolean;
        defaultValue?: string;
      };
    }) => {
      const response = await apiRequest("POST", "/api/db/add-column", data);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add column');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/db/table-data', selectedTable] });
      toast({
        title: "Column added",
        description: "New column has been added successfully",
      });
      setIsAddColumnDialogOpen(false);
      setNewColumn({
        name: '',
        type: 'text',
        isNullable: true,
        isUnique: false
      });
    },
    onError: (error) => {
      toast({
        title: "Failed to add column",
        description: error instanceof Error ? error.message : "Unknown error occurred",
        variant: "destructive"
      });
    }
  });
  
  // Handle dropping a table
  const dropTableMutation = useMutation({
    mutationFn: async (tableName: string) => {
      // We'll use the SQL query endpoint to drop the table
      const response = await apiRequest("POST", "/api/db/execute-query", { 
        query: `DROP TABLE IF EXISTS "${tableName}";` 
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to drop table');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/db/tables'] });
      toast({
        title: "Table dropped",
        description: "Table has been dropped successfully",
      });
      setIsDropTableDialogOpen(false);
      setSelectedTable(null);
    },
    onError: (error) => {
      toast({
        title: "Failed to drop table",
        description: error instanceof Error ? error.message : "Unknown error occurred",
        variant: "destructive"
      });
    }
  });
  
  // Handle creating a new table
  const createTableMutation = useMutation({
    mutationFn: async (data: {
      tableName: string;
      columns: {
        name: string;
        type: string;
        isPrimary?: boolean;
        isNullable?: boolean;
        isUnique?: boolean;
        defaultValue?: string;
      }[];
    }) => {
      const response = await apiRequest("POST", "/api/db/create-table", data);
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create table');
      }
      
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/db/tables'] });
      toast({
        title: "Table created",
        description: "New table has been created successfully",
      });
      setIsAddTableDialogOpen(false);
    },
    onError: (error) => {
      toast({
        title: "Failed to create table",
        description: error instanceof Error ? error.message : "Unknown error occurred",
        variant: "destructive"
      });
    }
  });

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
            <div>
              <div className="flex justify-between mb-4">
                <h3 className="text-lg font-medium">Database Tables</h3>
                <Button size="sm" onClick={() => setIsAddTableDialogOpen(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Table
                </Button>
              </div>
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
            </div>
          )}

          {selectedTable && (
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold flex items-center">
                  <Table className="h-5 w-5 mr-2" />
                  Table: {selectedTable}
                </h2>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" onClick={() => setIsAddColumnDialogOpen(true)}>
                    <PlusCircle className="h-4 w-4 mr-2" />
                    Add Column
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setIsDropTableDialogOpen(true)}>
                    <Trash2 className="h-4 w-4 mr-2" />
                    Drop Table
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setSelectedTable(null)}>
                    <X className="h-4 w-4 mr-2" />
                    Close
                  </Button>
                </div>
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
                        <th className="px-4 py-3 text-left font-medium text-gray-700">
                          <div className="flex items-center justify-between">
                            <span>Actions</span>
                            <Button variant="ghost" size="sm" className="h-7 px-2 text-xs" onClick={() => setIsAddRowDialogOpen(true)}>
                              <Plus className="h-3 w-3 mr-1" />
                              Add Row
                            </Button>
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.data.rows.length === 0 ? (
                        <tr>
                          <td 
                            colSpan={tableData.data.columns.length + 1} 
                            className="px-4 py-8 text-center text-gray-500"
                          >
                            No data in this table
                          </td>
                        </tr>
                      ) : (
                        tableData.data.rows.map((row: Record<string, any>, rowIndex: number) => (
                          <tr key={rowIndex} className="border-b hover:bg-gray-50">
                            {tableData.data.columns.map((column: { name: string }) => (
                              <td key={column.name} className="px-4 py-3 align-top">
                                <div className="max-w-xs truncate">
                                  {formatValue(row[column.name])}
                                </div>
                              </td>
                            ))}
                            <td className="px-2 py-3 align-top whitespace-nowrap">
                              <div className="flex space-x-1">
                                <Button variant="ghost" size="icon" onClick={(e) => {
                                  e.stopPropagation();
                                  handleEditRow(row);
                                }}>
                                  <Edit className="h-4 w-4" />
                                </Button>
                                <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-700 hover:bg-red-50" onClick={(e) => {
                                  e.stopPropagation();
                                  if (primaryKeyColumn && window.confirm('Are you sure you want to delete this row? This cannot be undone.')) {
                                    deleteRowMutation.mutate({
                                      tableName: selectedTable,
                                      primaryKey: primaryKeyColumn,
                                      primaryKeyValue: row[primaryKeyColumn]
                                    });
                                  }
                                }}>
                                  <Trash className="h-4 w-4" />
                                </Button>
                              </div>
                            </td>
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

      {/* Edit Row Dialog */}
      <Dialog open={isEditRowDialogOpen} onOpenChange={setIsEditRowDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Edit Row</DialogTitle>
            <DialogDescription>
              Edit values for this row in table {selectedTable}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {editingRow && tableData?.data?.columns && (
              <div className="grid grid-cols-1 gap-4">
                {tableData.data.columns.map((column) => (
                  <div key={column.name} className="space-y-2">
                    <Label htmlFor={`field-${column.name}`}>
                      {column.name}
                      {column.isPrimary && <span className="ml-2 text-xs font-normal text-gray-500">(Primary Key)</span>}
                    </Label>
                    <Input
                      id={`field-${column.name}`}
                      value={editingRow[column.name] === null ? '' : editingRow[column.name]}
                      onChange={(e) => setEditingRow({...editingRow, [column.name]: e.target.value})}
                      disabled={column.isPrimary}
                      className={column.isPrimary ? "bg-gray-100" : ""}
                    />
                    <p className="text-xs text-gray-500">{column.type} {column.isNullable ? '(nullable)' : '(required)'}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditRowDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSaveRow} disabled={updateRowMutation.isPending}>
              {updateRowMutation.isPending ? (
                <>
                  <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Add Row Dialog */}
      <Dialog open={isAddRowDialogOpen} onOpenChange={setIsAddRowDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>Add New Row</DialogTitle>
            <DialogDescription>
              Add a new row to table {selectedTable}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            {tableData?.data?.columns && (
              <div className="grid grid-cols-1 gap-4">
                {tableData.data.columns.map((column) => {
                  // We'll create a new row with empty values for each column
                  if (!editingRow) {
                    const newRow: Record<string, any> = {};
                    tableData.data.columns.forEach(col => {
                      newRow[col.name] = col.isPrimary ? null : '';
                    });
                    setEditingRow(newRow);
                  }
                  
                  return (
                    <div key={column.name} className="space-y-2">
                      <Label htmlFor={`new-field-${column.name}`}>
                        {column.name}
                        {column.isPrimary && <span className="ml-2 text-xs font-normal text-gray-500">(Primary Key - Auto-generated)</span>}
                      </Label>
                      <Input
                        id={`new-field-${column.name}`}
                        value={editingRow?.[column.name] === null ? '' : editingRow?.[column.name] || ''}
                        onChange={(e) => setEditingRow({...editingRow!, [column.name]: e.target.value})}
                        disabled={column.isPrimary}
                        className={column.isPrimary ? "bg-gray-100" : ""}
                        placeholder={column.isNullable ? "Optional" : "Required"}
                      />
                      <p className="text-xs text-gray-500">{column.type} {column.isNullable ? '(nullable)' : '(required)'}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setIsAddRowDialogOpen(false);
              setEditingRow(null);
            }}>
              Cancel
            </Button>
            <Button onClick={() => {
              if (!selectedTable || !editingRow) return;
              
              // Remove primary key field if it's set to null or empty
              const rowData = {...editingRow};
              if (primaryKeyColumn && (rowData[primaryKeyColumn] === null || rowData[primaryKeyColumn] === '')) {
                delete rowData[primaryKeyColumn];
              }
              
              addRowMutation.mutate({
                tableName: selectedTable,
                rowData: rowData
              });
            }} disabled={addRowMutation.isPending}>
              {addRowMutation.isPending ? (
                <>
                  <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2" />
                  Adding...
                </>
              ) : (
                <>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Row
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Create Table Dialog */}
      <Dialog open={isAddTableDialogOpen} onOpenChange={setIsAddTableDialogOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>Create New Table</DialogTitle>
            <DialogDescription>
              Define a new database table with the required columns
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="new-table-name">Table Name</Label>
              <Input
                id="new-table-name"
                placeholder="e.g., customers, orders, products"
                className="w-full"
              />
              <p className="text-xs text-gray-500">
                Use lowercase letters and underscores for table names. Should be plural.
              </p>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Columns</Label>
                <Button variant="outline" size="sm" className="h-8" onClick={() => {
                  // Add new column to the columns list
                }}>
                  <Plus className="h-3 w-3 mr-1" />
                  Add Column
                </Button>
              </div>
              
              <div className="border rounded-md overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100 border-b">
                      <th className="px-4 py-2 text-left font-medium text-gray-700">Name</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-700">Type</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-700">Constraints</th>
                      <th className="px-4 py-2 text-left font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Default id column */}
                    <tr className="border-b">
                      <td className="px-4 py-2">
                        <Input
                          defaultValue="id"
                          className="h-8"
                          disabled
                        />
                      </td>
                      <td className="px-4 py-2">
                        <Input
                          defaultValue="serial"
                          className="h-8"
                          disabled
                        />
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="id-primary" defaultChecked disabled />
                          <Label htmlFor="id-primary" className="text-xs">Primary Key</Label>
                          
                          <Checkbox id="id-nullable" disabled />
                          <Label htmlFor="id-nullable" className="text-xs">Nullable</Label>
                        </div>
                      </td>
                      <td className="px-4 py-2 text-gray-400">
                        <span className="text-xs italic">Required column</span>
                      </td>
                    </tr>
                    
                    {/* New column template */}
                    <tr className="border-b">
                      <td className="px-4 py-2">
                        <Input
                          placeholder="name"
                          className="h-8"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <Select>
                          <SelectTrigger className="h-8">
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="text">text</SelectItem>
                            <SelectItem value="integer">integer</SelectItem>
                            <SelectItem value="boolean">boolean</SelectItem>
                            <SelectItem value="timestamp">timestamp</SelectItem>
                            <SelectItem value="jsonb">jsonb</SelectItem>
                            <SelectItem value="varchar">varchar</SelectItem>
                            <SelectItem value="decimal">decimal</SelectItem>
                            <SelectItem value="uuid">uuid</SelectItem>
                          </SelectContent>
                        </Select>
                      </td>
                      <td className="px-4 py-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="col-primary" />
                          <Label htmlFor="col-primary" className="text-xs">Primary Key</Label>
                          
                          <Checkbox id="col-nullable" defaultChecked />
                          <Label htmlFor="col-nullable" className="text-xs">Nullable</Label>
                        </div>
                      </td>
                      <td className="px-4 py-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Trash className="h-4 w-4 text-red-500" />
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddTableDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => {
              // Create the table with the defined columns
              createTableMutation.mutate({
                tableName: "new_table", // Get from input
                columns: [
                  { name: "id", type: "serial", isPrimary: true, isNullable: false },
                  // Add other columns from dynamic form
                ]
              });
            }} disabled={createTableMutation.isPending}>
              {createTableMutation.isPending ? (
                <>
                  <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2" />
                  Creating...
                </>
              ) : (
                <>
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Create Table
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Add Column Dialog */}
      <Dialog open={isAddColumnDialogOpen} onOpenChange={setIsAddColumnDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Add New Column</DialogTitle>
            <DialogDescription>
              Add a new column to table {selectedTable}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="column-name">Column Name</Label>
              <Input
                id="column-name"
                value={newColumn.name}
                onChange={(e) => setNewColumn({...newColumn, name: e.target.value})}
                placeholder="e.g., title, price, etc."
                autoComplete="off"
              />
              <p className="text-xs text-gray-500">
                Use lowercase letters, numbers, and underscores only
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="column-type">Data Type</Label>
              <Select 
                value={newColumn.type} 
                onValueChange={(value) => setNewColumn({...newColumn, type: value})}
              >
                <SelectTrigger id="column-type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text">text</SelectItem>
                  <SelectItem value="integer">integer</SelectItem>
                  <SelectItem value="boolean">boolean</SelectItem>
                  <SelectItem value="date">date</SelectItem>
                  <SelectItem value="timestamp">timestamp</SelectItem>
                  <SelectItem value="numeric">numeric</SelectItem>
                  <SelectItem value="jsonb">jsonb</SelectItem>
                  <SelectItem value="uuid">uuid</SelectItem>
                  <SelectItem value="varchar">varchar</SelectItem>
                  <SelectItem value="text[]">text[] (array)</SelectItem>
                  <SelectItem value="integer[]">integer[] (array)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-2">
                <Switch 
                  id="column-nullable" 
                  checked={newColumn.isNullable}
                  onCheckedChange={(checked) => setNewColumn({...newColumn, isNullable: checked})}
                />
                <Label htmlFor="column-nullable">Allow NULL values</Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch
                  id="column-unique"
                  checked={newColumn.isUnique}
                  onCheckedChange={(checked) => setNewColumn({...newColumn, isUnique: checked})}
                />
                <Label htmlFor="column-unique">Unique constraint</Label>
              </div>
            </div>
            
            <div className="space-y-2 pt-2">
              <Label htmlFor="column-default">Default Value (optional)</Label>
              <Input
                id="column-default"
                value={newColumn.defaultValue || ''}
                onChange={(e) => setNewColumn({...newColumn, defaultValue: e.target.value || undefined})}
                placeholder="e.g., 0, 'Unknown', etc."
              />
              <p className="text-xs text-gray-500">
                Leave empty for no default value
              </p>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddColumnDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              onClick={() => {
                if (!selectedTable || !newColumn.name || !newColumn.type) {
                  toast({
                    title: "Missing required fields",
                    description: "Please fill in all required fields",
                    variant: "destructive"
                  });
                  return;
                }
                
                addColumnMutation.mutate({
                  tableName: selectedTable,
                  column: newColumn
                });
              }} 
              disabled={addColumnMutation.isPending}
            >
              {addColumnMutation.isPending ? (
                <>
                  <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2" />
                  Adding...
                </>
              ) : (
                <>
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add Column
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Drop Table Confirmation Dialog */}
      <Dialog open={isDropTableDialogOpen} onOpenChange={setIsDropTableDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-red-600">Drop Table Confirmation</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete the table "{selectedTable}" and all its data.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="bg-red-50 border border-red-200 rounded-md p-4">
              <p className="text-red-800 font-medium">Warning:</p>
              <ul className="list-disc ml-5 mt-2 text-sm text-red-700 space-y-1">
                <li>All data in this table will be permanently deleted</li>
                <li>Any applications or queries relying on this table will fail</li>
                <li>This action cannot be undone or recovered</li>
              </ul>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDropTableDialogOpen(false)}>
              Cancel
            </Button>
            <Button 
              variant="destructive"
              onClick={() => {
                if (!selectedTable) return;
                dropTableMutation.mutate(selectedTable);
              }} 
              disabled={dropTableMutation.isPending}
            >
              {dropTableMutation.isPending ? (
                <>
                  <div className="animate-spin w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2" />
                  Dropping Table...
                </>
              ) : (
                <>
                  <Trash2 className="h-4 w-4 mr-2" />
                  Drop Table
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </main>
  );
}