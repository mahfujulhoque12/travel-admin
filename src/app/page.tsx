import AddRefund from "@/components/organisms/add-refund/AddRefund";
import BookingFlight from "@/components/organisms/booking-flight/BookingFlight";
import CustomerDetails from "@/components/organisms/add-customer/CustomerDetails";
import Table from "@/components/organisms/table/Table";
import Topbar from "@/components/organisms/topbar/Topbar";
import CustomerProfile from "@/components/organisms/customer-profile/CustomerProfile";
import AddEmployee from "@/components/organisms/add-employee/AddEmployee";
import EmployeProfile from "@/components/organisms/employee-profile/EmployeProfile";
import CompanyInfo from "@/components/organisms/company-info/CompanyInfo";
import AddSupportTicket from "@/components/organisms/add-support-ticket/AddSupportTicket";
import AddTopup from "@/components/organisms/add-topup/AddTopup";
import Walet from "@/components/organisms/walet/Walet";


export default function Home() {


  return (
    <div>

 {/* <Topbar/>
 <Table/> */}
 <AddRefund/>
 <CustomerDetails/>
 <CustomerProfile/>
 <AddEmployee/>
 <EmployeProfile/>
 <CompanyInfo/>
 <AddSupportTicket/>
 <AddTopup/>
 <Walet/>
 {/* <BookingFlight/> */}
    </div>
  );
}
