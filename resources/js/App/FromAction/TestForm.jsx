import { Form, useActionData } from "react-router-dom";

export function TestForm(props){
    const form = useActionData();
    console.log(form);

    return <>
        <Form method="post" action="/form-test" encType="multipart/form-data">
            <input type="text" name="names" />
            <input type="email" name="email"/>
            <input type="file" name="files"/>
            <button type="submit">
                Submited...
            </button>
        </Form>
    </>
}