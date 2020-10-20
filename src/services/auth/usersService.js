export const fetchUsers = async () => {
	try{
		const users = await fetch("https://jsonplaceholder.typicode.com/users");
		const data = await users.tojson();
		return data;
	}catch(error){
		return error;
	}
}