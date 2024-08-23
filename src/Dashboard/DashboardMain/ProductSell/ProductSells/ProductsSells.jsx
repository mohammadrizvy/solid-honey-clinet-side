import React from 'react';

const ProductsSells = () => {
    return (
        <div className="p-6 bg-white rounded-lg shadow-md flex flex-col md:flex-row">
        <div className="flex-1">
          <div className="text-lg font-semibold mb-4">
            বিক্রয় = পাইকারী বিক্রয়
          </div>
          
          <div className="grid grid-cols-4 gap-4 mb-4">
            <input type="date" className="input input-bordered w-full" defaultValue="2024-08-22" />
            <input type="text" className="input input-bordered w-full" placeholder="ক্লেটা সিলেক্ট" />
            <select className="select select-bordered w-full">
              <option>সিলেক্ট</option>
            </select>
            <button className="btn btn-primary w-full">সাম্প্রতিক বিক্রয়</button>
          </div>
  
          <div className="flex items-center mb-4">
            <input type="text" className="input input-bordered w-full bg-green-700 text-white" placeholder="Search the Product" />
            <input type="text" className="input input-bordered ml-4 bg-green-700 text-white" placeholder="গ্রুপ ইউনিট" />
            <input type="number" className="input input-bordered ml-4 bg-green-700 text-white" placeholder="পরিমান" />
            <input type="number" className="input input-bordered ml-4 bg-green-700 text-white" placeholder="মূল্য" />
            <button className="btn btn-error ml-4">Add</button>
          </div>
  
          <table className="table w-full mb-4">
            <thead>
              <tr className="bg-green-400">
                <th></th>
                <th>ধরণ</th>
                <th>বারকোড</th>
                <th>বিবরণ</th>
                <th>ব্যাচ</th>
                <th>গ্রুপ ইউনিট</th>
                <th>পরিমান</th>
                <th>মূল্য</th>
                <th>ছাড়</th>
                <th>সর্বমোট</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through products here */}
              <tr>
                <td><button className="btn btn-square btn-error btn-sm"><i className="fa fa-trash"></i></button></td>
                <td>/* Type */</td>
                <td>/* Barcode */</td>
                <td>/* Description */</td>
                <td>/* Batch */</td>
                <td>/* Group Unit */</td>
                <td>/* Quantity */</td>
                <td>/* Price */</td>
                <td>/* Discount */</td>
                <td>/* Total */</td>
              </tr>
            </tbody>
          </table>
  
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input type="text" className="input input-bordered" placeholder="মন্তব্য" />
            <select className="select select-bordered">
              <option>SALES MAN</option>
            </select>
          </div>
  
          <div className="flex items-center mb-4">
            <select className="select select-bordered w-full">
              <option>অবস্থা</option>
              <option>Complete</option>
            </select>
            <label className="ml-4 flex items-center">
              <input type="checkbox" className="checkbox checkbox-primary" />
              <span className="ml-2">SMS</span>
            </label>
          </div>
        </div>
  
        <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-100 p-4 rounded-lg">
          <div className="grid grid-cols-1 gap-4 mb-4">
            <input type="text" className="input input-bordered" placeholder="সর্বমোট" disabled />
            <input type="text" className="input input-bordered" placeholder="পণ্য ফেরত" />
            <div className="flex items-center">
              <input type="number" className="input input-bordered w-full" placeholder="ছাড় %" />
              <button className="btn btn-outline btn-primary ml-2">Less</button>
            </div>
            <input type="text" className="input input-bordered" placeholder="পরিবহন" />
            <input type="text" className="input input-bordered" placeholder="প্রদেয়" />
            <input type="text" className="input input-bordered" placeholder="নগদ প্রদান" />
            <input type="text" className="input input-bordered" placeholder="বকেয়া" />
            <input type="text" className="input input-bordered" placeholder="ব্যালেন্স" />
            <select className="select select-bordered">
              <option>পেমেন্ট মাধ্যম</option>
              <option>Cash</option>
            </select>
          </div>
          <button className="btn btn-primary w-full">সেভ</button>
        </div>
      </div>
    );
};

export default ProductsSells;