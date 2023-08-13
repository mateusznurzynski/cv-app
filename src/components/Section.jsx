function Section({ tab }) {
  return (
    <section className={tab.id}>
      <h1>{tab.resultHeader}</h1>
      {tab.id !== 'basic' ? <hr /> : null}
      {tab.fieldSet.map((field) => {
        return (
          <div key={field.id} className='info-container'>
            {tab.id !== 'basic' ? (
              <p className='info-title'>{field.label}:</p>
            ) : null}
            <p className='info-value'>{field.value}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Section;
