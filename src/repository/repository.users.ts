import axios from 'axios';

export class UsersRepository {
    url: string;
    constructor() {
        this.url = '  http://localhost:3900/user';
    }
    getUsers(): Promise<any> {
        // GET
        return axios
            .get(this.url)
            .then((res) => {
                console.log(res);
                // return fetch(this.url).then((resp) => {
                //     return resp.json();
                // });
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

//     getProduct(id: string): Promise<Product> {
//         // GET
//         return fetch(this.url + `/${id}`).then((resp) => resp.json());
//     }
//     setProduct(product: Product): Promise<Product> {
//         // POST
//         return fetch(this.url, {
//             method: 'POST',
//             body: JSON.stringify(product),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         }).then((response) => response.json());
//     }
//     updateProduct(product: Product): Promise<Partial<Product>> {
//         // PUT / PATCH
//         return fetch(this.url + `/${product.id}`, {
//             method: 'PATCH',
//             body: JSON.stringify(product),
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         }).then((response) => response.json());
//     }
//     deleteProduct(id: string): Promise<number> {
//         // DELETE
//         return fetch(this.url + `/${id}`, {
//             method: 'DELETE',
//         }).then((response) => response.status);
//     }
// }
