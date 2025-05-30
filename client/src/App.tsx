import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AgentAIProvider } from "@/contexts/AgentAIContext";
import { ContactProvider } from "@/contexts/ContactContext";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import Loader from "@/components/layout/Loader";
import AgentAIModal from "@/components/layout/AgentAIModal";
import ContactModal from "@/components/layout/ContactModal";
import Home from "@/pages/home";
import AboutUs from "@/pages/about-us";
import OurTeam from "@/pages/our-team";
import Careers from "@/pages/careers";
import AiIntelligence from "@/pages/ai-intelligence";
import CloudStack from "@/pages/cloud-stack";
import MultiCloud from "@/pages/multi-cloud";
import CyberSecurity from "@/pages/cyber-security";
import Defence from "@/pages/defence";
import Space from "@/pages/space";
import SpaceSolutions from "@/pages/solutions/space";
import BankingSolutions from "@/pages/solutions/banking";
import AllIndustriesPage from "@/pages/solutions/all-industries";
import OilGasPage from "@/pages/solutions/oil-gas";
import IndustrialManufacturingPage from "@/pages/solutions/industrial-manufacturing";
import PublicSectorPage from "@/pages/solutions/public-sector";
import UtilitiesPage from "@/pages/solutions/utilities";
import HealthcarePage from "@/pages/solutions/healthcare";
import InsurancePage from "@/pages/solutions/insurance";
import ServiceManagementAviator from "@/pages/solutions/service-management-aviator";
import AgricultureFarming from "@/pages/technology/agriculture-farming";
import Healthcare from "@/pages/technology/healthcare";
import LifeSupport from "@/pages/technology/life-support";
import Product1 from "@/pages/product1";
import Product2 from "@/pages/product2";
import Product3 from "@/pages/product3";
import Consulting from "@/pages/consulting";
import Development from "@/pages/development";
import Support from "@/pages/support";
import AiChat from "@/pages/ai-chat";
import Admin from "@/pages/admin";

// CMS Pages
import CmsDashboard from "@/pages/cms/index";
import CmsContent from "@/pages/cms/content";
import CmsContentSection from "@/pages/cms/content/[id]";
import CmsNavigation from "@/pages/cms/navigation";
import CmsHeroSections from "@/pages/cms/hero-sections";
import CmsGallery from "@/pages/cms/gallery";
import CmsSettings from "@/pages/cms/settings";
import CmsWebsiteContent from "@/pages/cms/website-content";
import DatabaseAdmin from "@/pages/cms/database-admin";
import CmsLogin from "@/pages/cms/login";
import CmsProfile from "@/pages/cms/profile";

// Product Pages
import AnalyticsCloud from "@/pages/products/analytics-cloud";
import BusinessNetworkCloud from "@/pages/products/business-network-cloud";
import ContentCloud from "@/pages/products/content-cloud";
import CybersecurityCloud from "@/pages/products/cybersecurity-cloud";
import DevOpsCloud from "@/pages/products/devops-cloud";
import ExperienceCloud from "@/pages/products/experience-cloud";
import ObservabilityServiceManagement from "@/pages/products/observability-service-management";
import ProductListing from "@/pages/products/a-z-listing";
import ProductNameChanges from "@/pages/products/name-changes";

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/our-team" component={OurTeam} />
      <Route path="/careers" component={Careers} />
      <Route path="/ai-intelligence" component={AiIntelligence} />
      <Route path="/cloud-stack" component={CloudStack} />
      <Route path="/multi-cloud" component={MultiCloud} />
      <Route path="/cyber-security" component={CyberSecurity} />
      <Route path="/defence" component={Defence} />
      <Route path="/space" component={Space} />
      <Route path="/solutions/ai-intelligence" component={AiIntelligence} />
      <Route path="/solutions/cloud-stack" component={CloudStack} />
      <Route path="/solutions/cyber-security" component={CyberSecurity} />
      <Route path="/solutions/defence" component={Defence} />
      <Route path="/solutions/multi-cloud" component={MultiCloud} />
      <Route path="/solutions/space" component={SpaceSolutions} />
      <Route path="/solutions/banking" component={BankingSolutions} />
      <Route path="/solutions/all-industries" component={AllIndustriesPage} />
      <Route path="/solutions/oil-gas" component={OilGasPage} />
      <Route path="/solutions/industrial-manufacturing" component={IndustrialManufacturingPage} />
      <Route path="/solutions/public-sector" component={PublicSectorPage} />
      <Route path="/solutions/utilities" component={UtilitiesPage} />
      <Route path="/solutions/healthcare" component={HealthcarePage} />
      <Route path="/solutions/insurance" component={InsurancePage} />
      <Route path="/solutions/service-management-aviator" component={ServiceManagementAviator} />
      <Route path="/technology/agriculture-farming" component={AgricultureFarming} />
      <Route path="/technology/healthcare" component={Healthcare} />
      <Route path="/technology/life-support" component={LifeSupport} />
      <Route path="/product1" component={Product1} />
      <Route path="/product2" component={Product2} />
      <Route path="/product3" component={Product3} />
      <Route path="/consulting" component={Consulting} />
      <Route path="/development" component={Development} />
      <Route path="/support" component={Support} />
      <Route path="/ai-chat" component={AiChat} />
      <Route path="/admin" component={Admin} />
      
      {/* CMS Routes */}
      <Route path="/cms/login" component={CmsLogin} />
      
      {/* Protected CMS Routes */}
      <Route path="/cms">
        <ProtectedRoute>
          <CmsDashboard />
        </ProtectedRoute>
      </Route>
      <Route path="/cms/content">
        <ProtectedRoute>
          <CmsContent />
        </ProtectedRoute>
      </Route>
      <Route path="/cms/content/:id">
        <ProtectedRoute>
          <CmsContentSection />
        </ProtectedRoute>
      </Route>
      <Route path="/cms/navigation">
        <ProtectedRoute>
          <CmsNavigation />
        </ProtectedRoute>
      </Route>
      <Route path="/cms/hero-sections">
        <ProtectedRoute>
          <CmsHeroSections />
        </ProtectedRoute>
      </Route>
      <Route path="/cms/gallery">
        <ProtectedRoute>
          <CmsGallery />
        </ProtectedRoute>
      </Route>
      <Route path="/cms/settings">
        <ProtectedRoute>
          <CmsSettings />
        </ProtectedRoute>
      </Route>
      <Route path="/cms/website-content">
        <ProtectedRoute>
          <CmsWebsiteContent />
        </ProtectedRoute>
      </Route>
      <Route path="/cms/database-admin">
        <ProtectedRoute>
          <DatabaseAdmin />
        </ProtectedRoute>
      </Route>
      <Route path="/cms/profile">
        <ProtectedRoute>
          <CmsProfile />
        </ProtectedRoute>
      </Route>
      
      {/* Product Routes */}
      <Route path="/products/analytics-cloud" component={AnalyticsCloud} />
      <Route path="/products/business-network-cloud" component={BusinessNetworkCloud} />
      <Route path="/products/content-cloud" component={ContentCloud} />
      <Route path="/products/cybersecurity-cloud" component={CybersecurityCloud} />
      <Route path="/products/devops-cloud" component={DevOpsCloud} />
      <Route path="/products/experience-cloud" component={ExperienceCloud} />
      <Route path="/products/observability-service-management" component={ObservabilityServiceManagement} />
      <Route path="/products/a-z-listing" component={ProductListing} />
      <Route path="/products/name-changes" component={ProductNameChanges} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AgentAIProvider>
          <ContactProvider>
            <Loader />
            <Navbar />
            <Router />
            <Footer />
            <BackToTop />
            <AgentAIModal />
            <ContactModal />
            <Toaster />
          </ContactProvider>
        </AgentAIProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
