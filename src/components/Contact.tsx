import { contacts } from "../constants/contacts";

function Contact(){
    return (
        <>
        <section id="contact" className="min-h-screen flex items-center justify-center relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-16">
            <div className="text-purple-400 text-sm tracking-[0.5em] mb-4">NETWORK_CONNECTION</div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-wider">
              <span className="text-white">CONTACT</span>
              <span className="text-cyan-400 ml-4">連絡先</span>
            </h2>
          </div>
          
          <div className="bg-gray-900/30 border border-purple-400/30 p-12 mb-12 hover:border-purple-400 transition-all duration-300">
            <div className="text-purple-400 text-xs tracking-widest mb-4">STATUS</div>
            <div className="text-3xl font-bold mb-4">READY FOR CONNECTION</div>
            <div className="text-cyan-400 text-lg mb-8">
              接続準備完了 • システムオンライン
            </div>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on cutting-edge projects? Let's build the future together through 
              innovative technology and exceptional design.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                className={`block bg-gray-900/50 border border-${contact.color}-400/30 hover:border-${contact.color}-400 p-6 transition-all duration-300 group hover:bg-${contact.color}-400/10`}
                style={{ clipPath: 'polygon(15px 0%, 100% 0%, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0% 100%, 0% 15px)' }}
              >
                <contact.icon className={`w-8 h-8 text-${contact.color}-400 mb-4 mx-auto`} />
                <div className={`text-${contact.color}-400 text-xs tracking-widest mb-2`}>{contact.label}</div>
                <div className="text-lg font-bold">{contact.value}</div>
              </a>
            ))}
          </div>
        </div>
      </section>
      </>
    );
}

export default Contact