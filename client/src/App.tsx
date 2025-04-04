import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AgentAIProvider } from "@/contexts/AgentAIContext";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import Loader from "@/components/layout/Loader";
import AgentAIModal from "@/components/layout/AgentAIModal";
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
      <Route path="/cms" component={CmsDashboard} />
      <Route path="/cms/content" component={CmsContent} />
      <Route path="/cms/content/:id" component={CmsContentSection} />
      <Route path="/cms/navigation" component={CmsNavigation} />
      <Route path="/cms/hero-sections" component={CmsHeroSections} />
      <Route path="/cms/gallery" component={CmsGallery} />
      <Route path="/cms/settings" component={CmsSettings} />
      <Route path="/cms/website-content" component={CmsWebsiteContent} />
      
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
      <AgentAIProvider>
        <Loader />
        <Navbar />
        <Router />
        <Footer />
        <BackToTop />
        <AgentAIModal />
        <Toaster />
      </AgentAIProvider>
    </QueryClientProvider>
  );
}

export default App;
