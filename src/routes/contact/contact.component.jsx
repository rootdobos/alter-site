import NameCard from "../../components/name-card/name-card.component";
import "./contact.styles.scss";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="social-media">
        <a href="https://www.facebook.com/crew.alter">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fcfcfc"
              d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978c.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036a26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103l-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647"
            />
          </svg>
        </a>
        <a href="https://www.youtube.com/channel/UCPJHuffBkqdYBQMdaeLmqAw">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fcfcfc"
              d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814M9.545 15.568V8.432L15.818 12z"
            />
          </svg>
        </a>
        <a href="https://www.instagram.com/altertabor/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fcfcfc"
              d="M7.03.084c-1.277.06-2.149.264-2.91.563a5.874 5.874 0 0 0-2.124 1.388a5.878 5.878 0 0 0-1.38 2.127C.321 4.926.12 5.8.064 7.076C.008 8.354-.005 8.764.001 12.023c.007 3.259.021 3.667.083 4.947c.061 1.277.264 2.149.563 2.911c.308.789.72 1.457 1.388 2.123a5.872 5.872 0 0 0 2.129 1.38c.763.295 1.636.496 2.913.552c1.278.056 1.689.069 4.947.063c3.257-.007 3.668-.021 4.947-.082c1.28-.06 2.147-.265 2.91-.563a5.881 5.881 0 0 0 2.123-1.388a5.881 5.881 0 0 0 1.38-2.129c.295-.763.496-1.636.551-2.912c.056-1.28.07-1.69.063-4.948c-.006-3.258-.02-3.667-.081-4.947c-.06-1.28-.264-2.148-.564-2.911a5.892 5.892 0 0 0-1.387-2.123a5.857 5.857 0 0 0-2.128-1.38c-.764-.294-1.636-.496-2.914-.55C15.647.009 15.236-.006 11.977 0C8.718.008 8.31.021 7.03.084m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.736 3.736 0 0 1-1.382-.895a3.695 3.695 0 0 1-.9-1.378c-.165-.423-.363-1.058-.417-2.228c-.06-1.264-.072-1.644-.08-4.848c-.006-3.204.006-3.583.061-4.848c.05-1.169.246-1.805.408-2.228c.216-.561.477-.96.895-1.382a3.705 3.705 0 0 1 1.379-.9c.423-.165 1.057-.361 2.227-.417c1.265-.06 1.644-.072 4.848-.08c3.203-.006 3.583.006 4.85.062c1.168.05 1.804.244 2.227.408c.56.216.96.475 1.382.895c.421.42.681.817.9 1.378c.165.422.362 1.056.417 2.227c.06 1.265.074 1.645.08 4.848c.005 3.203-.006 3.583-.061 4.848c-.051 1.17-.245 1.805-.408 2.23c-.216.56-.477.96-.896 1.38a3.705 3.705 0 0 1-1.378.9c-.422.165-1.058.362-2.226.418c-1.266.06-1.645.072-4.85.079c-3.204.007-3.582-.006-4.848-.06m9.783-16.192a1.44 1.44 0 1 0 1.437-1.442a1.44 1.44 0 0 0-1.437 1.442M5.839 12.012a6.161 6.161 0 1 0 12.323-.024a6.162 6.162 0 0 0-12.323.024M8 12.008A4 4 0 1 1 12.008 16A4 4 0 0 1 8 12.008"
            />
          </svg>
        </a>
        <a href="https://www.tiktok.com/@altertabor">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#fcfcfc"
              d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07"
            />
          </svg>
        </a>
      </div>
      <div className="hotlines">
        <div>
          <h3> Dézsafakultáció</h3>
          <h4>
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
            manyika@citromail.hu
          </h4>
          <h4>
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
            07 696 9696
          </h4>
        </div>
        <div>
          <h3> Pletyka hotline</h3>
          <h4>
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
            manyika@citromail.hu
          </h4>
          <h4>
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
            07 696 9696
          </h4>
        </div>
        <div>
          <h3> Segítsünk a pandákon</h3>
          <h4>
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
            manyika@citromail.hu
          </h4>
          <h4>
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
            07 696 9696
          </h4>
        </div>
        <div>
          <h3> Libán járhatósági hírek</h3>
          <h4>
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
            manyika@citromail.hu
          </h4>
          <h4>
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
            07 696 9696
          </h4>
        </div>
      </div>
      <div className="contact-holders">
        <NameCard
          image="https://images.squarespace-cdn.com/content/v1/55b786cce4b0abd99ecbcb5a/1556221706947-4E2Y4PQP3V47HUJ0AHRM/088.jpg"
          name="Rufus Maximus"
          email="asd@asd.ro"
          phone="07 07 07 07 07"
        />
        <NameCard
          image="https://st2.depositphotos.com/2927537/6666/i/950/depositphotos_66660735-stock-photo-monkey-portrait.jpg"
          name="Sunny I Felcsiki"
          email="example@example.ro"
          phone="07 07 07 07 07"
        />
        <NameCard
          image="https://images.squarespace-cdn.com/content/v1/55b786cce4b0abd99ecbcb5a/1556222134242-MZXVA5A7UAMQZC7GZPB3/heatmiser%2B%281%29.jpg"
          name="Dr. Ewan McGregor"
          email="example@example.ro"
          phone="07 07 07 07 07"
        />
      </div>
    </div>
  );
};
export default Contact;
