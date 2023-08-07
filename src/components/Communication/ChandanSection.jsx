// import AddButton from "./AddButton";
import { Toaster } from "react-hot-toast";
import NoticeManager from "./NoticeManager";
import PopupForm from "./PopupForm";
import UpcomingEvents from "./UpcomingEvents";

export default function ChandanSection() {
  return (
    <div className="flex justify-between">
        <NoticeManager />
        <PopupForm />
        <UpcomingEvents />
        <Toaster />
    </div>
  )
}
