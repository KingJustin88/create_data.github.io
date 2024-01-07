import React from 'react' 

export default (props) => {
    const {
        submit,
        submitButtonText,
        elements,
    } = props;

    function handleSubmit(event) {
        event.preventDefault();
        submit();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {elements()}
                <button className="button" type="submit">{submitButtonText}</button>
            </form>
            
        </div>
    )
}
