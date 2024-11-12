const Gallery = () => (
  <section
    id="gallery"
    className="p-10 bg-custom-gradient text-white"
  >
    <h2 className="text-3xl font-bold mb-8 text-center">Gallery</h2>
    <p className="mb-6 text-lg text-center">
      A showcase of community events and tech conferences I actively participated in, capturing memorable moments with industry leaders and fellow developers.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Card 1 */}
      <div className="bg-opacity-80 bg-darkBlue-600 rounded-lg shadow-lg overflow-hidden">
        <img src="/ETH_Capetown.jpg" alt="W3Node Conference & ETHCapeTown" className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-cyan-400 mb-2">W3Node Conference & ETHCapeTown Hackathon</h3>
          <p className="text-sm">
            I received a travel sponsorship to participate in the ETHCapeTown hackathon in South Africa. The experience included full access to all conference sessions, where I gained valuable insights from top blockchain developers and innovators.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-opacity-80 bg-darkBlue-600 rounded-lg shadow-lg overflow-hidden">
        <img src="/ETHCAP2.jpg" alt="Building Networks in Blockchain" className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-cyan-400 mb-2">Building Networks in Blockchain</h3>
          <p className="text-sm">
            Had an enriching meetup with key figures in the blockchain space, including Felix Macharia (Kotani Pay CEO), Allan Mangeni (Filecoin Community), Eric Annan (Aya Labs), and Stephanie (Celo Protocol Developer).
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-opacity-80 bg-darkBlue-600 rounded-lg shadow-lg overflow-hidden">
        <img src="/Ethcap3.jpg" alt="Africa Blockchain Club Meetup" className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-cyan-400 mb-2">Africa Blockchain Club Meetup</h3>
          <p className="text-sm">
            Met Kalah Haley (Founder and CEO of SaintRock Media), Maite and Genny from WeThinkCode, and members of the Africa Blockchain Club in Johannesburg, discussing the future of blockchain in Africa.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-opacity-80 bg-darkBlue-600 rounded-lg shadow-lg overflow-hidden">
        <img src="/droidcon1.jpg" alt="DroidconXFlutterConKE Community Day" className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-cyan-400 mb-2">DroidconKE X FlutterConKE Community Day</h3>
          <p className="text-sm">
            Connected with tech enthusiasts like Ferdinand, Leyian, and Roina Ochieng, sharing insights on building and scaling tech products during the community day event.
          </p>
        </div>
      </div>

      {/* Card 5 */}
      <div className="bg-opacity-80 bg-darkBlue-600 rounded-lg shadow-lg overflow-hidden">
        <img src="/droidcon2.jpg" alt="Final Round at FlutterCon & DroidConKE" className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-cyan-400 mb-2">FlutterCon & DroidConKE Wrap up</h3>
          <p className="text-sm">
            Engaged with the Gophers community, event organizers, and speakers during the final round of FlutterConKE and DroidConKE conference.
          </p>
        </div>
      </div>

      {/* Card 6 */}
      <div className="bg-opacity-80 bg-darkBlue-600 rounded-lg shadow-lg overflow-hidden">
        <img src="/droidcon3.jpg" alt="5-Day Ideation Sprint with Gophers Nairobi" className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-semibold text-cyan-400 mb-2">5-Day Ideation Sprint</h3>
          <p className="text-sm">
            Collaborated with the Gophers Nairobi team on a 5-day ideation sprint, focusing on problem-solving and idea validation.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Gallery;
