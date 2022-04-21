import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import OnlineContacts from '../OnlineContacts/OnlineContacts';
import OfflineContacts from '../OfflineContacts/OfflineContacts';

function Contacts() {
    return (
        <div className="Contacts">
            <aside>
                <ul>
                    <li>
                        <Link to="/contacts/online">online</Link>
                    </li>
                    <li>
                        <Link to="/contacts/offline">offline</Link>
                    </li>
                </ul>
            </aside>
            <Routes>
                <Route path='/online' element={<OnlineContacts />} />
                <Route path='/offline' element={<OfflineContacts />} />
            </Routes>
        </div>
    )
}

export default Contacts