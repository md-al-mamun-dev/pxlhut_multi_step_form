
export default async function index({searchParams}) {
    const {name, username, email, phone, address, city, zip } = await searchParams;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 h-full min-h-screen animate-fade-in">
      <h1 className="text-3xl font-bold text-center mb-8 animate-slide-down">
        User Details
      </h1>

      <div className="w-full max-w-2xl mx-auto p-10 mt-10 rounded-lg shadow-lg bg-white dark:bg-gray-800 animate-pop-in">
        <div className="space-y-2 grid grid-cols-2 gap-4">
          <p className="user-detail-item col-span-full">Name: {name}</p>
          <p className="user-detail-item col-span-full">Email: {email}</p>
            <p className="user-detail-item">Phone: {phone}</p>
          {/* <div className="col-span-full">
            
          </div> */}
          <p className="user-detail-item">Username: {username}</p>
          
        </div>

        <hr className="h-px my-8 bg-gray-300 border-0 dark:bg-gray-500" />

        <div className="grid grid-cols-2 gap-4 mt-10">
          <h3 className="col-span-full text-xl font-semibold px-6">Address</h3>
          <p className="user-detail-item col-span-full">Street Address: {address}</p>
          <p className="user-detail-item">City: {city} </p>
          <p className="user-detail-item">Zip Code: {zip} </p>
        </div>
      </div>
    </div>
  )
}
