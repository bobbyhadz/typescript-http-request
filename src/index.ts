export {};

// EXAMPLE 1 - Making HTTP GET requests in TypeScript

type User = {
  id: number;
  email: string;
  first_name: string;
};

type GetUsersResponse = {
  data: User[];
};

async function getUsers() {
  try {
    // 👇️ const response: Response
    const response = await fetch('https://reqres.in/api/users', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    // 👇️ const result: GetUsersResponse
    const result = (await response.json()) as GetUsersResponse;

    console.log('result is: ', JSON.stringify(result, null, 4));

    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

getUsers();

// ---------------------------------------------------

// // EXAMPLE 2 - Making HTTP POST requests in TypeScript

// type CreateUserResponse = {
//   name: string;
//   job: string;
//   id: string;
//   createdAt: string;
// };

// async function createUser() {
//   try {
//     // 👇️ const response: Response
//     const response = await fetch('https://reqres.in/api/users', {
//       method: 'POST',
//       body: JSON.stringify({
//         name: 'John Smith',
//         job: 'manager',
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Error! status: ${response.status}`);
//     }

//     // 👇️ const result: CreateUserResponse
//     const result = (await response.json()) as CreateUserResponse;

//     console.log('result is: ', JSON.stringify(result, null, 4));

//     return result;
//   } catch (error) {
//     if (error instanceof Error) {
//       console.log('error message: ', error.message);
//       return error.message;
//     } else {
//       console.log('unexpected error: ', error);
//       return 'An unexpected error occurred';
//     }
//   }
// }

// createUser();

// ---------------------------------------------------

// // EXAMPLE 3 - Making HTTP PATCH requests in TypeScript

// type UpdateUserResponse = {
//   name: string;
//   job: string;
//   updatedAt: string;
// };

// async function updateUser() {
//   try {
//     // 👇️ const response: Response
//     const response = await fetch('https://reqres.in/api/users/2', {
//       method: 'PATCH',
//       body: JSON.stringify({
//         name: 'John Smith',
//         job: 'manager',
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Error! status: ${response.status}`);
//     }

//     // 👇️ const result: UpdateUserResponse
//     const result = (await response.json()) as UpdateUserResponse;

//     console.log('result is: ', JSON.stringify(result, null, 4));

//     return result;
//   } catch (error) {
//     if (error instanceof Error) {
//       console.log('error message: ', error.message);
//       return error.message;
//     } else {
//       console.log('unexpected error: ', error);
//       return 'An unexpected error occurred';
//     }
//   }
// }

// updateUser();

// ---------------------------------------------------

// // EXAMPLE 4 - Making HTTP PUT requests in TypeScript

// type UpdateUserResponse = {
//   name: string;
//   job: string;
//   updatedAt: string;
// };

// async function updateUser() {
//   try {
//     // 👇️ const response: Response
//     const response = await fetch('https://reqres.in/api/users/2', {
//       method: 'PUT',
//       body: JSON.stringify({
//         name: 'John Smith',
//         job: 'manager',
//       }),
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Error! status: ${response.status}`);
//     }

//     // 👇️ const result: UpdateUserResponse
//     const result = (await response.json()) as UpdateUserResponse;

//     console.log('result is: ', JSON.stringify(result, null, 4));

//     return result;
//   } catch (error) {
//     if (error instanceof Error) {
//       console.log('error message: ', error.message);
//       return error.message;
//     } else {
//       console.log('unexpected error: ', error);
//       return 'An unexpected error occurred';
//     }
//   }
// }

// updateUser();

// ---------------------------------------------------

// // EXAMPLE 5 - Making HTTP DELETE requests in TypeScript

// async function deleteUser() {
//   try {
//     // 👇️ const response: Response
//     const response = await fetch('https://reqres.in/api/users/2', {
//       method: 'DELETE',
//       headers: {
//         Accept: 'application/json',
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Error! status: ${response.status}`);
//     }

//     console.log('User deleted successfully');

//     return 'user deleted successfully';
//   } catch (error) {
//     if (error instanceof Error) {
//       console.log('error message: ', error.message);
//       return error.message;
//     } else {
//       console.log('unexpected error: ', error);
//       return 'An unexpected error occurred';
//     }
//   }
// }

// deleteUser();
