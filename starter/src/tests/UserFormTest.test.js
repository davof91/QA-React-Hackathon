import UserForm from '../Components/Signup/UserForm';
import { create, act } from 'react-test-renderer';
import React from 'react';

jest.mock("react-datepicker", () => {
    return function MockDatePicker() {
        return <span testid="datePicker">Date Created Component</span>
    }
});

describe(`TodoForm test suite`, () => {

    let submitUser;

    beforeEach(() => {
        submitUser = jest.fn();
    });

    describe(`DateCreated function and render tests`, () => {

        test(`it should render a DateCreated component a date`, () => {

            const testRenderer = create(<UserForm submitUser={submitUser} />);
            const testInstance = testRenderer.root;

            const dateCreated = testInstance.find(
                el => el.type === `span` && el.props.testid === `datePicker`
            );

            expect(dateCreated).toBeTruthy();
            expect(dateCreated.children).toContain(`Date Created Component`);
        });
    });

    describe(`onChange event tests`, () => {

        test(`it should render the new value in the input when the userTitle onChange function is activated`, () => {
            const testValue = `Mr.`;

            const testRenderer = create(<UserForm submitUser={submitUser} />);
            
            const testInstance = testRenderer.root;

            const descInput = testInstance.findByProps({ name: "userTitle" });
            expect(descInput.props.value).toBe(``);

            act(() => descInput.props.onChange({ target: { value: testValue } }));

            expect(descInput.props.value).toBe(testValue);
        });

        test(`it should render the new value in the input when the firstName onChange function is activated`, () => {
            const testValue = `Test`;

            const testRenderer = create(<UserForm submitUser={submitUser} />);
            
            const testInstance = testRenderer.root;

            const descInput = testInstance.findByProps({ name: "firstName" });
            expect(descInput.props.value).toBe(``);

            act(() => descInput.props.onChange({ target: { value: testValue } }));

            expect(descInput.props.value).toBe(testValue);
        });

        test(`it should render the new value in the input when the lastName onChange function is activated`, () => {
            const testValue = `Test`;

            const testRenderer = create(<UserForm submitUser={submitUser} />);
            
            const testInstance = testRenderer.root;

            const descInput = testInstance.findByProps({ name: "lastName" });
            expect(descInput.props.value).toBe(``);

            act(() => descInput.props.onChange({ target: { value: testValue } }));

            expect(descInput.props.value).toBe(testValue);
        });

        test(`it should render the new value in the input when the email onChange function is activated`, () => {
            const testValue = `Test`;

            const testRenderer = create(<UserForm submitUser={submitUser} />);
            
            const testInstance = testRenderer.root;

            const descInput = testInstance.findByProps({ name: "email" });
            expect(descInput.props.value).toBe(``);

            act(() => descInput.props.onChange({ target: { value: testValue } }));

            expect(descInput.props.value).toBe(testValue);
        });

        test(`it should render the new value in the input when the phoneNumber onChange function is activated`, () => {
            const testValue = `Test`;

            const testRenderer = create(<UserForm submitUser={submitUser} />);
            
            const testInstance = testRenderer.root;

            const descInput = testInstance.findByProps({ name: "phoneNumber" });
            expect(descInput.props.value).toBe(``);

            act(() => descInput.props.onChange({ target: { value: testValue } }));

            expect(descInput.props.value).toBe(testValue);
        });

        test(`it should render the new value in the select when the gender onChange function is activated`, () => {
            const testValue = `Male`;

            const testRenderer = create(<UserForm submitUser={submitUser} />);
            const testInstance = testRenderer.root;
            const completedInput = testInstance.findByProps({ name: "gender" });

            expect(completedInput.props.value).toEqual('');

            act(() => completedInput.props.onChange({ target: { value: testValue } }));

            expect(completedInput.props.value).toBe(testValue);
        });

        test(`should enable the submit button when the todo description is populated`, () => {
            const testValue = `Test`;
            const testRenderer = create(<UserForm submitUser={submitUser} />);
            const testInstance = testRenderer.root;

            const descInput = testInstance.findByProps({ name: "userTitle" });
            const fnInput = testInstance.findByProps({ name: "firstName" });
            const lnInput = testInstance.findByProps({ name: "lastName" });
            const emailInput = testInstance.findByProps({ name: "email" });
            const submitBtn = testInstance.findByProps({ type: "submit" });

            expect(submitBtn.props.disabled).toBe(true);

            act(() => descInput.props.onChange({ target: { value: testValue } }));
            act(() => fnInput.props.onChange({ target: { value: testValue } }));
            act(() => lnInput.props.onChange({ target: { value: testValue } }));
            act(() => emailInput.props.onChange({ target: { value: testValue } }));

            expect(submitBtn.props.disabled).toBe(false);
            expect(submitBtn.props.className).toContain(`btn-primary`);

        });
    });
    
});