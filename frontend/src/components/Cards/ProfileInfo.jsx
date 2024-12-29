import React from "react"
import { getInitials } from "../../utils/helper"

const ProfileInfo = ({ onLogout, userInfo }) => {
  return (
    <div className="flex items-center gap-3">
      <div>
        <p className="text-[#efbf04] font-medium">{userInfo?.username}</p>
      </div>
      <button
        className="text-sm bg-[#efbf04] p-1 rounded-md text-[#111117] hover:opacity-80"
        onClick={onLogout}
      >
        Logout
      </button>
    </div>
  )
}

export default ProfileInfo
