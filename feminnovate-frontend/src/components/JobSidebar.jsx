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

const JobSidebar = () => {
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
                <p className={`${styles.subheading1} text-black`}>Job Type</p>
                <div className="mt-4">
                    <div className="flex items-center mb-[-5px] ml-2">
                        <ControlledCheckbox/>
                        <span className={`${styles.subheading7} text-opacity-50 text-black`}>Freelance</span>
                    </div>
                    <div className="flex items-center mb-[-5px] ml-2">
                        <ControlledCheckbox/>
                        <span className={`${styles.subheading7} text-opacity-50 text-black`}>Internship</span>
                    </div>
                    <div className="flex items-center mb-[-5px] ml-2">
                        <ControlledCheckbox/>
                        <span className={`${styles.subheading7} text-opacity-50 text-black`}>Part-time</span>
                    </div>
                    <div className="flex items-center mb-[-5px] ml-2">
                        <ControlledCheckbox/>
                        <span className={`${styles.subheading7} text-opacity-50 text-black`}>Full-time</span>
                    </div>
                </div>
            </div>

            <div className="mt-8 ml-2">
                <p className={`${styles.subheading1} text-black`}>Experience</p>
                <div className="mt-4">
                    <div className="flex items-center mb-[-5px] ml-2">
                        <ControlledCheckbox/>
                        <span className={`${styles.subheading7} text-opacity-50 text-black`}>{"< 1 year"}</span>
                    </div>
                    <div className="flex items-center mb-[-5px] ml-2">
                        <ControlledCheckbox/>
                        <span className={`${styles.subheading7} text-opacity-50 text-black`}>1 - 2 years</span>
                    </div>
                    <div className="flex items-center mb-[-5px] ml-2">
                        <ControlledCheckbox/>
                        <span className={`${styles.subheading7} text-opacity-50 text-black`}>2 - 6 years</span>
                    </div>
                    <div className="flex items-center mb-[-5px] ml-2">
                        <ControlledCheckbox/>
                        <span className={`${styles.subheading7} text-opacity-50 text-black`}>{"> 6 years"}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobSidebar