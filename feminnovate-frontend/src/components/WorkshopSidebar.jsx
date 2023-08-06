import { useState } from "react";
import styles from "../style"
import { Checkbox } from "@mui/material"

const ControlledCheckbox = () => {
    const [checked, setChecked] = useState(false);
  
    const handleChange = (event) => {
      setChecked(event.target.checked);
    };
  
    return (
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    );
  }

const WorkshopSidebar = () => {
    return (
        <div className="mt-[25%] w-[100%] p-5">
            <div className="flex justify-between items-end">
                <span className={`${styles.subheading2} text-black`}>
                    Filters
                </span>
                <span className={`${styles.subheading5} text-black text-opacity-50 cursor-pointer hover:underline`}>
                    Clear All
                </span>
            </div>
            <div className="mt-8 ml-2">
                <p className={`${styles.subheading1} text-black`}>Category</p>
                <div className="mt-4">
                    <div className="flex items-center mb-[-5px] ml-2">
                        <ControlledCheckbox/>
                        <span className={`${styles.subheading7} text-opacity-50 text-black`}>Web development</span>
                    </div>
                    <div className="flex items-center mb-[-5px] ml-2">
                        <ControlledCheckbox/>
                        <span className={`${styles.subheading7} text-opacity-50 text-black`}>Data analytics</span>
                    </div>
                    <div className="flex items-center mb-[-5px] ml-2">
                        <ControlledCheckbox/>
                        <span className={`${styles.subheading7} text-opacity-50 text-black`}>AI and ML</span>
                    </div>
                    <div className="flex items-center mb-[-5px] ml-2">
                        <ControlledCheckbox/>
                        <span className={`${styles.subheading7} text-opacity-50 text-black`}>Cybersecurity</span>
                    </div>
                </div>
            </div>

            <div className="mt-8 ml-2">
                <p className={`${styles.subheading1} text-black`}>Company</p>
                <div className="mt-4">
                    <div className="flex items-center mb-[-5px] ml-2">
                        <ControlledCheckbox/>
                        <span className={`${styles.subheading7} text-opacity-50 text-black`}>TCS</span>
                    </div>
                    <div className="flex items-center mb-[-5px] ml-2">
                        <ControlledCheckbox/>
                        <span className={`${styles.subheading7} text-opacity-50 text-black`}>Google</span>
                    </div>
                    <div className="flex items-center mb-[-5px] ml-2">
                        <ControlledCheckbox/>
                        <span className={`${styles.subheading7} text-opacity-50 text-black`}>Stripe</span>
                    </div>
                </div>
            </div>

            <div className="mt-8 ml-2">
                <p className={`${styles.subheading1} text-black`}>Venue</p>
                <div className="mt-4">
                    <div className="flex items-center mb-[-5px] ml-2">
                        <ControlledCheckbox/>
                        <span className={`${styles.subheading7} text-opacity-50 text-black`}>Online</span>
                    </div>
                    <div className="flex items-center mb-[-5px] ml-2">
                        <ControlledCheckbox/>
                        <span className={`${styles.subheading7} text-opacity-50 text-black`}>Singapore</span>
                    </div>
                    <div className="flex items-center mb-[-5px] ml-2">
                        <ControlledCheckbox/>
                        <span className={`${styles.subheading7} text-opacity-50 text-black`}>Australia</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WorkshopSidebar