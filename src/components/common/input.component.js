const Input = (props) => {
    const { type, id, value , handleChange , error } = props;
    return (
        <>
            <input
                type={type}
                className="form-control"
                id={id}
                value={value}
                onChange={handleChange}
            />
            <div className="invalid-feedback d-block">{error}</div>
        </>
    );
};

export default Input;
