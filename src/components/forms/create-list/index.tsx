import styles from "./create-list.module.scss";
import Input from "../../input";
import { Formik } from "formik";
import * as Yup from "yup";

const CreateList = () => {
  const createListSchema = Yup.object().shape({
    name: Yup.string().min(2, "Too Short!").required("is required"),
    description: Yup.string().min(2, "Too Short!").required("is required"),
    eventDate: Yup.string().required("is required"),
  });

  return (
    <>
      <div className={styles.waitListFormContainer}>
        <div className={styles.waitListFormHeader}>
          <h2 className={styles.waitListFormTitle}>Create new list 🎁</h2>
        </div>
        <div className={styles.waitListFormDescription}>
          Ready to bring your dreams to life? Share it with loved ones and let
          the magic of giving unfold.
        </div>
        <Formik
          initialValues={{
            name: "",
            description: "",
            eventDate: "",
          }}
          validationSchema={createListSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form
              className={styles.waitListForm}
              onSubmit={handleSubmit}
              noValidate
            >
              <div className={styles.waitListFormInputWrapper}></div>
              <Input
                name="name"
                type="text"
                placeholder="30th Birthday wishlist"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                error={errors.name}
                touched={touched.name}
              />
              <Input
                name="description"
                type="text"
                placeholder="Doe"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
                error={errors.description}
                touched={touched.description}
              />
              <Input
                type="date"
                name="eventDate"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.eventDate}
                error={errors.eventDate}
                touched={touched.eventDate}
              />
              <div className={styles.waitListFormButton}>
                <button
                  type="submit"
                  className={styles.button}
                  disabled={isSubmitting}
                >
                  <div className={styles.buttonWrapper}>
                    <div className={styles.buttonText}>Create list</div>
                    <div className={styles.buttonIcon}>
                      <svg
                        width={16}
                        height={16}
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.5 13L11.5 5"
                          stroke="#fff"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.5 4H12.1667V10.6667"
                          stroke="#fff"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default CreateList;
