import MemberCard from "../../components/member-card/member-card.component";
import { AppDataContext } from "../../contexts/app-data/app-data.context";
import { useContext } from "react";
const AboutUs = () => {
  const { members } = useContext(AppDataContext);
  return (
    <div className="about-us">
      <h3>A Szervezet</h3>
      <p>
        My capacity is full introduccion the closest elephant is the most
        dangerous UX. Big data hammer out get all your ducks in a row.
        Cannibalize build on a culture of contribution and inclusion, but game
        plan knowledge process outsourcing. You must be muted we're building the
        plane while we're flying it, overcome key issues to meet key milestones,
        yet overcome key issues to meet key milestones, so make it a priority.
        Player-coach into the weeds. Social currency we need a paradigm shift,
        value prop face time upstream selling. Corporate synergy zeitgeist
        conversational content bottleneck mice put your feelers out let's
        pressure test this, for golden goose. Pushback let's schedule a standup
        during the sprint to review our kpis copy and paste from stack overflow.
        Feature creep have bandwidth. Draw a line in the sand granularity locked
        and loaded it's a simple lift and shift job, for start procrastinating 2
        hours get to do work while procrastinating open book pretend to read
        while manager stands and watches silently nobody is looking quick do
        your web search manager caught you and you are fured, product management
        breakout fastworks. Globalize. We need to touch base off-line before we
        fire the new ux experience i need to pee and then go to another meeting,
        nor drop-dead date, enough to wash your face. You must be muted net net,
        and goalposts, slipstream. Anti-pattern i don't want to drain the whole
        swamp, i just want to shoot some alligators in this space corporate
        synergy. Get six alpha pups in here for a focus group who's responsible
        for the ask for this request?, so back-end of third quarter. Upsell put
        a record on and see who dances. We're building the plane while we're
        flying it can you send me an invite? golden goose, or let's unpack that
        later, for are we in agreeance. That's not on the roadmap proceduralize
        tribal knowledge cc me on that. Market-facing weâ€™re starting to
        formalize flexible opinions around our foundations. Wiggle room looks
        great, can we try it a different way I have zero cycles for this. Let's
        prioritize the low-hanging fruit customer centric, yet tbrand terrorists
        deploy to production, nor post launch red flag, yet we need to think big
        start small and scale fast to energize our clients. Wiggle room. This is
        our north star design circle back around, but upstream selling, nor but
        what's the real problem we're trying to solve here?, win-win-win regroup
        this is a no-brainer. Hop on the bandwagon get six alpha pups in here
        for a focus group what's the status on the deliverables for eow?
        cannibalize. Our competitors are jumping the shark win-win they have
        downloaded gmail and seems to be working for now staff engagement it's
        not hard guys ramp up. Big picture we need evergreen content, so it's
        about managing expectations.{" "}
      </p>
      <img
        src="https://png.pngtree.com/background/20230611/original/pngtree-group-of-monkeys-sitting-on-tree-picture-image_3159383.jpg"
        alt=""
      />
      <div className="vision">
        <h3>Víziónk</h3>
        <p>Mit kíván a magyar nemzet. Legyen béke, szabadság és egyetértés.</p>
        <ul>
          <li>1. Kívánjuk a sajtó szabadságát, censura eltörlését.</li>
          <li>2. Felelős ministeriumot Buda-Pesten.</li>
          <li>3. Évenkinti országgyűlést Pesten</li>
          <li>4. Törvény előtti egyenlőséget polgári és vallási tekintetben.</li>
          <li>5. Nemzeti őrsereg.</li>
          <li>6. Közös teherviselés.</li>
          <li>7. Úrbéri viszonyok megszűntetése.</li>
          <li>8. Esküdtszék, képviselet egyenlőség alapján.</li>
          <li>9. Nemzeti Bank.</li>
          <li>10. A katonaság esküdjék meg az alkotmányra, magyar katonáinkat ne vigyék külföldre, a külföldieket vigyék el tőlünk.</li>
          <li>11. A politikai statusfoglyok szabadon bocsátassanak.</li>
          <li>12. Unio.</li>
        </ul>
        <p>Egyenlőség, szabadság, testvériség!</p>
      </div>
      <div className="members">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
