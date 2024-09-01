import { useToast } from '@/context/ToastContext';
import { ArrowLeft } from 'lucide-react';
import React from 'react';

interface MyProfileProps {
  showInviteFriends: boolean;
  setShowInviteFriends: React.Dispatch<React.SetStateAction<boolean>>;
}

const InviteFriendCode = "dw;lkad;lwkda;lsdlkawjdk";
const InviteFriendList = [
  { name: "John Doe", email: "john@example.com" },
  { name: "Jane Smith", email: "jane@example.com" },
  { name: "Sam Johnson", email: "sam@example.com" },
];

const InviteFriends: React.FC<MyProfileProps> = ({ showInviteFriends, setShowInviteFriends }) => {
    if (!showInviteFriends) return null;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { showToast } = useToast();

    return (
        <aside className="min-w-1/4 w-full md:w-1/4 h-screen bg-white shadow-md overflow-y-auto fixed sidebar z-50">
            <div className="flex justify-between px-6 py-4 items-center border-b bg-gray-50">
                <h2 className="text-lg font-semibold text-gray-700">Invite Friends</h2>
                <ArrowLeft
                onClick={() => setShowInviteFriends(false)}
                className="cursor-pointer w-6 h-6 text-gray-600 hover:text-gray-800 transition-all duration-300"
                />
            </div>
            
            <div className="p-6">
                <div className="mb-6">
                <h3 className="text-md font-medium text-gray-700">Your Invite Code</h3>
                <div className="mt-2 p-3 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-between">
                    <span className="text-gray-600 font-mono">{InviteFriendCode}</span>
                    <button className="text-blue-500 hover:text-blue-700 transition-all duration-300"
                        onClick={() => {
                            navigator.clipboard.writeText(`${InviteFriendCode}`);
                            showToast('Copy success!', 'success')
                        }}
                    >
                    Copy
                    </button>
                </div>
                </div>

                <div>
                <h3 className="text-md font-medium text-gray-700 mb-4">Friends You Haved Invite</h3>
                <ul className="space-y-4">
                    {InviteFriendList.map((friend, index) => (
                    <li key={index} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg shadow-sm">
                        <div>
                        <p className="text-gray-800 font-medium">{friend.name}</p>
                        <p className="text-gray-500 text-sm">{friend.email}</p>
                        </div>
                        <button className="text-sm text-white bg-blue-500 hover:bg-blue-600 transition-all duration-300 rounded px-4 py-2">
                            Contract
                        </button>
                    </li>
                    ))}
                </ul>
                </div>
            </div>
        </aside>
    );
};

export default InviteFriends;
