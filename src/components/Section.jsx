function Section({ tab }) {
  return (
    <section className={tab.id}>
      <h1>{tab.resultHeader}</h1>
      {tab.id !== 'basic' ? <hr /> : null}
      {tab.fieldSet.map((field) => {
        return (
          <p key={field.id} className={field.id}>
            {field.value}
          </p>
        );
      })}
    </section>
  );
}

export default Section;
