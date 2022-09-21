export function createAccount(email, password) {
 return fetch('http://localhost:3000/api/auth/signup', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify({email, password})
 })
   .then(data => data.json())
}