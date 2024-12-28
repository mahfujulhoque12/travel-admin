import BookingTableWrapper from "@/components/organisms/Booking/BookingTableWrapper";
import RefundTableWrapper from "@/components/organisms/refund/RefundTableWrapper";
import ReportTableWrapper from "@/components/organisms/report/ReportTableWrapper";
import TransectionTableWraper from "@/components/organisms/transection/TransectionTableWraper";
import TopupTableWrapper from "@/components/organisms/topup/TopupTableWrapper";


export default function Page() {
  return (
    <div>
      <h1>Booking</h1>
      <BookingTableWrapper />


      <h1>Refund</h1>

      <RefundTableWrapper/>

      <h1>Report</h1>
      <ReportTableWrapper/>

      
<h1>transection</h1>
<TransectionTableWraper/>

<h1>Top up</h1>
<TopupTableWrapper/>

    </div>
  );
}
