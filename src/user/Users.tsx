import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import type { UserData } from "../../interface/User";

const Users = () => {
const users = useSelector((state: RootState) => {
  const u = state.user?.users;
  return Array.isArray(u) ? u : [];
});


  console.log("redux user", users)

  if (users.length === 0) {
    return <p className="text-center mt-10 text-gray-500">No users registered yet.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Registered Users</h2>
      <ul className="space-y-4">
        {users.map((user: UserData, index: number) => (
          <li
            key={user.id ?? index}
            className="border rounded-md p-4 shadow-sm bg-gray-50 hover:bg-gray-100 transition"
          >
            <p><strong>Name:</strong> {user.studentName}</p>
            <p><strong>Gender:</strong> {user.gender}</p>
            <p><strong>DOB:</strong> {user.dob}</p>
            <p><strong>Citizenship No:</strong> {user.citizenshipNumber}</p>
            <p><strong>Address:</strong> {user.municipality}, Ward {user.wardNo}, {user.district}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
