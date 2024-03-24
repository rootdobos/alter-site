import "./member-card.styles.scss";
const MemberCard = ({member }) => {
  return (
    <div className="member-card">
      <img src={member.image} alt={member.name} />
      <div className="contact-info">
        <h3>{member.name}</h3>
        <h4>{member.position}</h4>
        <div>
          <p>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fcfcfc"
                d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-.67 2L12 10.75L5.67 6ZM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2a1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1"
              />
            </svg>{" "}
            {member.email}
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="#fcfcfc"
                d="M17.4 22A15.42 15.42 0 0 1 2 6.6A4.6 4.6 0 0 1 6.6 2a3.94 3.94 0 0 1 .77.07a3.79 3.79 0 0 1 .72.18a1 1 0 0 1 .65.75l1.37 6a1 1 0 0 1-.26.92c-.13.14-.14.15-1.37.79a9.91 9.91 0 0 0 4.87 4.89c.65-1.24.66-1.25.8-1.38a1 1 0 0 1 .92-.26l6 1.37a1 1 0 0 1 .72.65a4.34 4.34 0 0 1 .19.73a4.77 4.77 0 0 1 .06.76A4.6 4.6 0 0 1 17.4 22M6.6 4A2.61 2.61 0 0 0 4 6.6A13.41 13.41 0 0 0 17.4 20a2.61 2.61 0 0 0 2.6-2.6v-.33L15.36 16l-.29.55c-.45.87-.78 1.5-1.62 1.16a11.85 11.85 0 0 1-7.18-7.21c-.36-.78.32-1.14 1.18-1.59L8 8.64L6.93 4Z"
              />
            </svg>{" "}
            {member.phone}
          </p>
        </div>
      </div>
    </div>
  );
};
export default MemberCard;
