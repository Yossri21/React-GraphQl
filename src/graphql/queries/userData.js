
const UserData = `
query user ($id:ID!) {
    user(id: $id){
      id
      email
      firstName
      lastName
    }
  }
`;


export default UserData;
