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
                <th>#</td>
                <th>Items</td>
                <th>Details</td>
            </tr>
            <tr>
                <td>1.</td>
                <td>Name of the requester</td>
                <td>${emailData.name}</td>
            </tr>
            <tr>
                <td>2.</td>
                <td>For whome is this request for?</td>
                <td>${emailData._for}</td>
            </tr>
            <tr>
                <td>3.></td>
                <td>Services</td>
                <td>
                <ol>${emailData.services.map(
                  (service) => "<li>" + service + "</li>"
                )}</ol>
                </td>
            </tr>
            <tr>
                <td>4.</td>
                <td>Phone Number</td>
                <td>${emailData.phoneNumber}</td>
            </tr>
            <tr>
                <td>5.</td>
                <td>Email address</td>
                <td>${emailData.email}</td>
            </tr>
            <tr>
                <td>6.</td>
                <td>Street</td>
                <td>${emailData.street}</td>
            </tr>
            <tr>
                <td>7.</td>
                <td>Suburb</td>
                <td>${emailData.suburb}</td>
            </tr>
            <tr>
                <td>8.</td>
                <td>Postcode</td>
                <td>${emailData.postCode}</td>
            </tr>
             <tr>
                <td>10.</td>
                <td>Message</td>
                <td>${
                  emailData.message !== "" || !emailData.message
                    ? "-- no message --"
                    : emailData.message
                }</td>
            </tr>
        </table>
</body>
</html>
`;
};
export default getEmailTemplate;
