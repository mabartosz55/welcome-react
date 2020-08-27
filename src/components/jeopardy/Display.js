import React from "react";

function Display(props) {


        let element = "Loading"
        if (props.jData.data.category !== undefined) {
            element = (
                <div>
                    Category: {props.jData.data.category.title}
                    <br />
                    <br />
                    Question: {props.jData.data.question}
                    <br />
                    <br />
                    Point Value: {props.jData.data.value}
                    <br />
                    <form onSubmit={props.handleSubmit}>
                        <div>
                            <label htmlFor="answer">Answer</label>
                            <input
                                type="text"
                                name="answer"
                                value={props.jData.formData.answer}
                                onChange={props.handleChange}
                            />
                        </div>
                        <button>Submit Answer</button>
                    </form>
                    Player Score: {props.jData.score}
                    <br />
                    <br />
                    Answer: Who/What is {props.jData.data.answer} ?
                    <br />
                </div>
            )
        }
        return (
            <div>
                {element}
            </div>
        );


}

export default Display