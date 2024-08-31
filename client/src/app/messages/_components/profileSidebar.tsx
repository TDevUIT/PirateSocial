'use client';
import { XIcon, Settings, Wallet, User, LogOut, Mail, UserPlus } from 'lucide-react';
import React, { useState } from 'react';
import MyProfile from './myProfile';
import SavedMessages from './savedMessage';
import InviteFriends from './inviteFriend';
import AccountSettings from './settingsAccount';
import WalletPage from './walletPage';
// import WalletPage from './WalletPage';
// import SavedMessages from './SavedMessages';
// import InviteFriends from './InviteFriends';
// import AccountSettings from './AccountSettings';
// import LogOutPage from './LogOutPage';

interface ProfileSidebarProps {
  showProfile: boolean;
  setShowProfile: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ showProfile, setShowProfile }) => {
  const [selectedOption, setSelectedOption] = useState<string>('MyProfile');
  const [showMyProfile, setShowMyProfile] = useState<boolean>(false);
  const [showSavedMessages, setShowSavedMessages] = useState<boolean>(false);
  const [showInviteFriends, setshowInviteFriends] = useState<boolean>(false);
  const [showAccountSettings, setShowAccountSettings] = useState<boolean>(false);
  const [showWallet, setShowWallet] = useState<boolean>(false);
  const renderSelectedOption = () => {
    switch (selectedOption) {
      case 'MyProfile':
        return (
          <MyProfile showMyProfile={showMyProfile} setShowMyProfile={setShowMyProfile} />
        );
      case 'Wallet':
        return <WalletPage showWallet={showWallet} setShowWallet={setShowWallet} />;
      case 'SavedMessages':
        return <SavedMessages showSavedMessages={showSavedMessages} setShowSavedMessages={setShowSavedMessages}/>;
      case 'InviteFriends':
        return <InviteFriends showInviteFriends={showInviteFriends} setShowInviteFriends={setshowInviteFriends}/>;
      case 'AccountSettings':
        return <AccountSettings showAccountSettings={showAccountSettings} setShowAccountSettings={setShowAccountSettings} />;
      // case 'LogOut':
      //   return <LogOutPage />;
      default:
        return null;
    }
  };

  return (
    <>
      <aside
        className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-gray-200 to-white shadow-lg overflow-y-auto z-20 transform transition-transform duration-300 ease-out ${
          showProfile ? 'translate-x-0 w-full md:w-1/4' : '-translate-x-full w-0'
        }`}
      >
        <div className="flex flex-col justify-between w-full h-[20%] bg-gradient-to-r from-blue-500 to-purple-600 p-6">
          <div className="flex justify-between w-full items-center">
            <div className="bg-black w-12 h-12 rounded-full"></div>
            <XIcon
              onClick={() => setShowProfile(false)}
              className="cursor-pointer w-8 h-8 rounded-full hover:bg-gray-300 transition-all duration-300"
            />
          </div>
          <div className="flex justify-start items-start text-gray-300">
            <p>22521377@gmail.com</p>
          </div>
        </div>
        <div className="p-6">
          <ul className="space-y-4">
            <SidebarOption
              label="My Profile"
              icon={<User className="w-5 h-5 mr-3" />}
              onClick={() => {
                setSelectedOption('MyProfile')
                setShowMyProfile(true)
              }}
            />
            <SidebarOption
              label="Wallet"
              icon={<Wallet className="w-5 h-5 mr-3" />}
              onClick={() => {
                  setSelectedOption('Wallet')
                  setShowWallet(true)
                }
              }
            />
            <SidebarOption
              label="Saved Messages"
              icon={<Mail className="w-5 h-5 mr-3" />}
              onClick={() => 
                {
                setSelectedOption('SavedMessages')
                setShowSavedMessages(true)

               }}
            />
            <SidebarOption
              label="Invite Friends"
              icon={<UserPlus className="w-5 h-5 mr-3" />}
              onClick={() => {
                setSelectedOption('InviteFriends')
                setshowInviteFriends(true)
              }}
            />
            <SidebarOption
              label="Account Settings"
              icon={<Settings className="w-5 h-5 mr-3" />}
              onClick={() => {
                setSelectedOption('AccountSettings')
                setShowAccountSettings(true)
              }}
              />
            <SidebarOption
              label="Log Out"
              icon={<LogOut className="w-5 h-5 mr-3" />}
              onClick={() => setSelectedOption('LogOut')}
            />
          </ul>
        </div>
      </aside>

      {showProfile && renderSelectedOption()}
    </>
  );
};

interface SidebarOptionProps {
  label: string;
  icon: React.ReactNode;
  onClick: () => void;
}

const SidebarOption: React.FC<SidebarOptionProps> = ({ label, icon, onClick }) => (
  <li
    className="cursor-pointer hover:bg-gray-100 p-3 rounded-lg flex items-center"
    onClick={onClick}
  >
    {icon} {label}
  </li>
);

export default ProfileSidebar;
