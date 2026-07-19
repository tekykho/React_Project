import { Formik, Field, Form, FieldArray } from 'formik';

export default function RegisterPage() {

    const marketingPreferences = [
        {
            "id": 1,
            "name": "Email Updates"
        },
        {
            "id": 2,
            "name": "Whatsapp"
        },
        {
            "id": 3,
            "name": "SMS Promotions"
        }
    ]

    const initialValues = {
        "name": "",
        "email": "",
        "phone": "",
        "password": "",
        "confirmPassword": "",
        "salutation": "Mr"
    }

    const handleSubmit = (values, formikHelpers) => {
        formikHelpers.setSubmitting(true);
        console.log(values)
        setTimeout(function(){
            console.log("The form has submitted");
            formikHelpers.setSubmitting(false);
        }, 3000)
    }

    return <>
        <div className="container">
            <h1>Register</h1>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                {
                    (formik) => (
                        <Form>
                            {/* Input Name */}
                            <div className="mb-3">
                                <label htmlFor="name"
                                    className="form-label">
                                    Name:
                                </label>
                                <Field type="text"
                                    id="name"
                                    className="form-control"
                                    name="name"
                                />
                            </div>
                            {/* Input Email */}
                            <div className="mb-3">
                                <label htmlFor="email"
                                    className="form-label">
                                    Email:
                                </label>
                                <Field type="text"
                                    id="email"
                                    className="form-control"
                                    name="email"
                                />
                            </div>
                            {/* Input Phone */}
                            <div className="mb-3">
                                <label htmlFor="phone"
                                    className="form-label">
                                    Phone:
                                </label>
                                <Field type="number"
                                    id="phone"
                                    className="form-control"
                                    name="phone"
                                />
                            </div>
                            {/* Input Password */}
                            <div className="mb-3">
                                <label htmlFor="password"
                                    className="form-label">
                                    Password:
                                </label>
                                <Field type="password"
                                    id="password"
                                    className="form-control"
                                    name="password"
                                />
                            </div>
                            {/* Input Confirmed Password */}
                            <div className="mb-3">
                                <label htmlFor="confirmPassword"
                                    className="form-label">
                                    Confirm Password:
                                </label>
                                <Field type="password"
                                    id="password"
                                    className="form-control"
                                    name="confirmPassword"
                                />
                            </div>
                            {/* Input Salutation */}
                            <div className="mb-3">
                                <label className="form-label">Salutation:</label>
                                <div className="form-check form-check-inline">
                                    <Field
                                        className="form-check-input"
                                        type="radio"
                                        name="salutation"
                                        id="mr"
                                        value="Mr"
                                    />
                                    <label className="form-label"
                                        htmlFor="mr">
                                        Mr.
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <Field
                                        className="form-check-input"
                                        type="radio"
                                        name="salutation"
                                        id="mrs"
                                        value="Mrs"
                                    />
                                    <label className="form-label"
                                        htmlFor="mrs">
                                        Mrs.
                                    </label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <Field
                                        className="form-check-input"
                                        type="radio"
                                        name="salutation"
                                        id="ms"
                                        value="Ms"
                                    />
                                    <label className="form-label"
                                        htmlFor="ms">
                                        Ms.
                                    </label>
                                </div>
                            </div>
                            {/* Input Marketing Preferences */}
                            <div className="mb-3">
                                <label className="form-label">
                                    Marketing Preferences:
                                </label>
                                {
                                    marketingPreferences.map(function (p) {
                                        return (<div className="form-check" key={p.id}>
                                            <Field type="checkbox"
                                                name="marketingPreferences"
                                                value={String(p.id)}
                                                className="form-check-input"
                                                id={`marketing-${p.id}`}
                                            />
                                            <label className="form-check-lable" 
                                                htmlFor={`marketing-${p.id}`}>
                                                {p.name}
                                            </label>
                                        </div>)
                                    })
                                }
                            </div>
                            {/* Input Country */}
                            <div className="mb-3">
                                <label htmlFor="country" className="form-label" >
                                Country
                                </label>
                                <Field as="select"
                                    className="form-select"
                                    id="country"
                                    name="country"
                                >
                                <option value="">Select Country</option>
                                <option value="sg">Singapore</option>
                                <option value="my">Malaysia</option>
                                <option value="in">India</option>
                                <option value="th">Thailand</option>
                                </Field>

                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary mb-3"
                                disabled={formik.isSubmitting}>
                                Submit
                            </button>
                        </Form>
                    )
                }
            </Formik>
        </div>


    </>
}