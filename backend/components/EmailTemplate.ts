interface EmailData {
  name: string;
  _for: string;
  phoneNumber: number | string;
  services: string[];
  email: string;
  suburb: string;
  street: string;
  postCode: string;
  message: string;
}
const getEmailTemplate = (emailData: EmailData) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
h2.new-message{
    color:#6d6d6d;
        }

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
th{
background-color:#0094d7;
color:#fff;
padding:10px;
text-align:left;
border: 1px solid #dddddd;
}

td{
  border: 1px solid #dddddd;
  text-align: left;
  padding: 4px 8px;
}
td:nth-child(1),th:nth-child(1){text-align:center}

tr:nth-child(even) {
  background-color: #eeeeee;
}
</style>
</head>
<body>
<h2 class="new-message">New client contact !</h2>
<table>
            <tr>
                <th><p>#</p></td>
                <th><p>Items</p></td>
                <th><p>Details</p></td>
            </tr>
            <tr>
                <td><p>1.</p></td>
                <td><p>Name of the requester</p></td>
                <td><p>${emailData.name}</p></td>
            </tr>
            <tr>
                <td><p>2.</p></td>
                <td><p>For whome is this request for?</p></td>
                <td><p>${emailData._for}</p></td>
            </tr>
            <tr>
                <td><p>3.</p></td>
                <td><p>Services</p></td>
                <td><ol>${emailData.services.map(
                  (service) => "<li>" + service + "</li>"
                )}</ol></td>
            </tr>
            <tr>
                <td><p>4.</p></td>
                <td><p>Phone Number</p></td>
                <td><p>${emailData.phoneNumber}</p></td>
            </tr>
            <tr>
                <td><p>5.</p></td>
                <td><p>Email address</p></td>
                <td><p>${emailData.email}</p></td>
            </tr>
            <tr>
                <td><p>6.</p></td>
                <td><p>Street</p></td>
                <td><p>${emailData.street}</p></td>
            </tr>
            <tr>
                <td><p>7.</p></td>
                <td><p>Suburb</p></td>
                <td><p>${emailData.suburb}</p></td>
            </tr>
            <tr>
                <td><p>8.</p></td>
                <td><p>Postcode</p></td>
                <td><p>${emailData.postCode}</p></td>
            </tr>
             <tr>
                <td><p>10.</p></td>
                <td><p>Message</p></td>
                <td><p>${emailData.message ?? "-- no message --"}</p></td>
            </tr>
        </table>
</body>
</html>
`;
};
export default getEmailTemplate;
