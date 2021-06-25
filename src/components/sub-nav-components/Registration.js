import React from 'react'
import './subNav.css'
const Registration = () => {
    return (
        <div className="Reg-side">
{/* Table */}

<table id="table-data">
  <tr>
    <th>Categary</th>
    <th>Register by 10/7/2020</th>
    <th>Late Registration by 10/7/2020</th>
  </tr>
  <tr>
    <td>Member</td>
    <td>$425</td>
    <td>$475</td>
  </tr>
  <tr>
    <td>Nonmember</td>
    <td>$625</td>
    <td>$675</td>
  </tr>
  <tr>
    <td>Member-in-Training</td>
    <td>$125</td>
    <td>$150</td>
  </tr>
  <tr>
    <td>Nonmember-in-Training</td>
    <td>$195</td>
    <td>$220</td>
  </tr>
  <tr>
    <td>Member Resident</td>
    <td>$50</td>
    <td>$50</td>
  </tr>
  <tr>
    <td>Nonmember Resident</td>
    <td>$75</td>
    <td>$75</td>
  </tr>
  <tr>
    <td>Member Student</td>
    <td>no charge</td>
    <td>no charge</td>
  </tr>
  
</table>

<br/><br/>
            {/* Bottom Note section */}
              <ul>
                  <li>
                      <h6 style={{fontStyle:'italic'}}>Note: Registration fee excluding VAT.</h6>
                  </li>
              </ul> 
              
            <p>
I am a paragraph. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin
literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in
Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
cites of the word in classical literature, discovered the undoubtable source.
<br/><br/>
Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of
Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used
since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H.
Rackham.
            </p>
        </div>
    )
}

export default Registration
