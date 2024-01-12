import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

const Admin = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return <h2>welcome {session?.user.username}</h2>;
  }

  return <h2>Please login to access Adin page</h2>;
};

export default Admin;
