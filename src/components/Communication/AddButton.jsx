import { BiAddToQueue } from 'react-icons/bi';

export default function AddButton(label) {
    console.log(label.label);
  return (
    <>
        <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
        <BiAddToQueue style={{display: "inline"}}/> {label.label} 
        </button>
    </>
  )
}
