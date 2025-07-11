import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const Users = () => {
  const users = useSelector((state: RootState) => {
    const u = state.users.users;
    return Array.isArray(u) ? u : [];
  });


  return (
    <div>
      <div className="pb-36">
        <div>
          <div
            className="relative overflow-x-auto shadow-md sm:rounded-lg mx-12 my-4 border-4 border-indigo-800"
          >
            <table className="text-center w-full text-sm rtl:text-right text-blue-100 dark:text-blue-100 border-separate border-spacing-1">
              <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
                <tr className="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
                  <th scope="row" className="px-6 py-3 text-base font-bold">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-base font-bold">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3 text-base font-bold">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-3 text-base font-bold">
                    Gender
                  </th>
                  <th scope="col" className="px-6 py-3 text-base font-bold">
                    Citizenship
                  </th>
                </tr>
              </thead>
              <tbody>
                {users
                  .map((user) => (
                    <tr
                      key={user.id} className="bg-gray-300 border-b border-gray-200 text-gray-900 hover:bg-blue-300">
                      <td scope="row" className="px-6 text-base font-medium whitespace-nowrap dark:text-blue-100">
                        {user.fullName}
                      </td>
                      <td scope="row" className="px-6 text-base font-medium whitespace-nowrap dark:text-blue-100">
                        {user.address}
                      </td>
                      <td scope="row" className="px-6 text-base font-medium whitespace-nowrap dark:text-blue-100">
                        {user.mobile}
                      </td>
                      <td scope="row" className="px-6 text-base font-medium whitespace-nowrap dark:text-blue-100">
                        {user.gender}
                      </td>
                      <td scope="row" className="px-6 text-base font-medium whitespace-nowrap dark:text-blue-100">
                        {user.citizenshipNumber}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
