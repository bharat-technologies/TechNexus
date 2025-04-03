import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import Loader from "@/components/layout/Loader";
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
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Loader />
      <Navbar />
      <Router />
      <Footer />
      <BackToTop />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
