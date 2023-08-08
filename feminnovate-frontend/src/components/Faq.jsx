import React, { useState } from "react";
import { CSSTransition } from "react-transition-group"; // ES6

const questions = [
    {
        Question: "What is Feminnovate?",
        Answer: "Lorem Ipsum.",
    },
];

const Faq = () => {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null);
        }
        setSelected(i);
    };

    return (
        <div className="items-center w-full max-w-[1280px] mx-auto pb-20" id="faq">
            <div className="font-extrabold text-[44px] pt-12 pb-12 text-center">
                Frequently Asked Questions
            </div>
            <div className="w-4/5 mx-auto">
                {questions.map((item, i) => (
                    <div className="px-10 py-5 mb-4 bg-purple rounded-[40px]">
                        <button
                            className="flex font-extrabold justify-between text-left text-[20px] items-center w-full rounded-full"
                            onClick={() => toggle(i)}
                        >
                            <h2>{item.Question}</h2>
                            <span>{selected == i ? "-" : "+"}</span>
                        </button>

                        <CSSTransition
                            in={selected === i}
                            classNames="example"
                            timeout={200}
                            // transitionLeaveTimeout={300}
                            unmountOnExit
                        >
                            <div
                                className={
                                    selected === i
                                        ? "h-auto"
                                        : "h-0 overflow-hidden"
                                }
                            >
                                {item.Answer}
                            </div>
                        </CSSTransition>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
