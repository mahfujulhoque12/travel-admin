import AddRefund from "@/components/organisms/add-refund/AddRefund";
import BookingFlight from "@/components/organisms/booking-flight/BookingFlight";
import Table from "@/components/organisms/table/Table";
import Topbar from "@/components/organisms/topbar/Topbar";


export default function Home() {


  return (
    <div>

 <Topbar/>
 <Table/>
 <AddRefund/>
 <BookingFlight/>
    </div>
  );
}
