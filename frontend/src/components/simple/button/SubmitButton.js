import Button from './Button';

class SubmitButton extends Button {

    render() {
        return (
            <Button label={(this.props.submitting && "Submitting") || "Submit"} type="submit" loading={this.props.submitting}/>
        );
    }
}

export default SubmitButton;
