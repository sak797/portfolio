import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-6">
            <Image
              src="/Anirudh.jpeg"
              alt="Sai Anirudh Kondaveeti"
              width={128}
              height={128}
              className="w-32 h-32 mx-auto mb-4 rounded-full object-cover border-4 border-white/20 shadow-lg"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sai Anirudh Kondaveeti</h1>
          <p className="text-xl md:text-2xl mb-6 opacity-90">Senior Software Engineer at Microsoft</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span>📧 sak797@nyu.edu</span>
            <span>📱 564 230 9743</span>
            <span>🔗 linkedin.com/in/saikondaveeti</span>
            <span>📍 Redmond, WA</span>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">Microsoft • June 2019 - Present</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Redmond, WA</p>
              <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                <li>• <strong>AAD:</strong> Increased reliability of login.microsoft.com to 99.999% with over billion requests/month. Reduced costs by 50% by optimizing the performance, scaling and moving to cheaper platform which hosts Azure instead of hosting on Azure. Handled production engineering stuff like setup of autoscale system, monitoring and alerting.</li>
                <li>• <strong>A4O:</strong> Developed Network Function Manager an Azure Service, which introduces a control plane for 5G infrastructure by managing Network Functions like Firewall, Packet Core across multi-cloud. Setup E2E testing pipelines, alerting, monitoring, improved the build and release pipelines.</li>
                <li>• <strong>C+E:</strong> Modernized USP application by integrating new features like IRIS chatbot, OCV. Migrated our data pipelines from ADB to Synapse. Setup alerting, monitoring and TSGs. Designed and developed ESRP an Azure Service, which enables support delivery based on the Azure usage. Setup E2E testing pipelines, alerting, monitoring, TSGs build and release pipelines.</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold">Engineering Simplicity in Contrail Multicloud Deployment</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">Juniper Networks, SDE Intern • Jun 2018 - Aug 2018</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Sunnyvale, CA</p>
              <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Designed and developed a multi-orchestrator config generator which enhanced Contrail by using single format to control multi-cloud using like OpenStack, vCenter, OpenShift and Kubernetes. This tool is shipped in the Contrail 5.0.1 release.</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold">Continuous Security in IoT using Blockchain</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">Samsung, Software Engineer in Research • Jul 2016 - Aug 2017</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Bangalore, India</p>
              <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Designed and developed a secure crypto token system using blockchain for IOT device interactions. Used hyperledger framework for development. Published a paper and filed a patent.</li>
                <li>• <strong>Co-inventor:</strong> &ldquo;Method and apparatus of continuous security in IOT environment using blockchain&rdquo;, USA: US15/956027, Filed Apr 18, 2017.</li>
                <li>• <strong>Co-author:</strong> &ldquo;Continuous Security in IoT using Blockchain&rdquo;, proceedings of IEEE ICASSP 2018</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold">GazeTk: Enhanced Eye-Tracking Accessibility with Tobii Integration</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">Bielefeld University, Research Intern • Sep 2015 - Dec 2015</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Bielefeld, Germany</p>
              <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Integrated the Tobii DK into the GazeTk framework, extending its capabilities to support Tobii eyetracking hardware. The extension maintained the use of the same API, ensuring seamless functionality across various eyetracking devices.</li>
              </ul>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-xl font-semibold">Robot Navigation System for Infrastructure Maintenance</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">University of Montreal, Research Intern • April 2015 - Jul 2015</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Montreal, Canada</p>
              <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Developed a low-cost robot navigation system using a PS3 Eye camera, OpenCV, and ROS, enabling cost-effective infrastructure maintenance for Hydro-Québec.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-3">Distributed Auto-Complete</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">Fall 2018</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Designed and implemented a fault-tolerant and distributed Auto-Complete system using distributed trie as base data structure.
              </p>
              <div className="flex gap-4">
                <a href="https://bit.ly/distributed_autoComplete" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">View Project</a>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-3">AutoKaggle: A Clean Meta-Dataset Solving All Kaggle Competitions</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">Spring 2018</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Introduced a new meta-dataset called AutoKaggle which consists of structured solutions to all Kaggle competitions organized according to their datasets, tasks, and machine learning pipelines. Developed a baseline algorithm to solve all Kaggle competitions.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Co-author: &ldquo;AutoKaggle: A Clean Meta-Dataset Solving All Kaggle Competitions&rdquo;, proceedings of ACM WSDM 2019.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-3">Data Center Network Architecture</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">Spring 2018</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Understanding the costs and benefits of moving functionality into network from end hosts, especially network security and congestion control.
              </p>
              <div className="flex gap-4">
                <a href="http://bit.ly/congestion_control" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Congestion Control</a>
                <a href="http://bit.ly/security_network" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Security Network</a>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Co-author: &ldquo;Network architecture in the age of programmability&rdquo;, ACM SIGCOMM CCR Editorial 2020.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-3">Cyclic-GAN</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">Fall 2017</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                As part of &ldquo;Vision meets ML&rdquo; coursework implemented a Cyclic-GAN in TensorFlow and trained it on &ldquo;vangogh2photo&rdquo; dataset to VanGoignize any photo.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-3">Gaze Likelihood Based Clickable Filtering</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">Fall 2015 & Spring 2016</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Actgaze is a framework to browse webpages using eye gaze. Implemented a posterior probability based filtering over Dynamic Clicking. This filtering technique reduced the number of available clickables drastically and also performed better in general browsing scenario.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">First author: &ldquo;Gaze likelihood based clickable filtering&rdquo;, proceedings of ACM IHCI 2016.</p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-3">Wisdom of Crowds</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm">Spring 2015</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Wisdom of the crowds is the collective opinion of a group of individuals rather than that of a single expert. Investigated on the validity of &ldquo;Wisdom of Crowds&rdquo; by experimenting on 1000 different tasks involving 50 different subjects.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Co-author: &ldquo;Investigating the Wisdom of Crowds at Scale&rdquo;, proceedings of ACM UIST 2015.</p>
            </div>
          </div>
        </section>

        {/* Publications & Patents Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Publications & Patents</h2>
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-3">Publications</h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>• <strong>Co-author:</strong> &ldquo;Network architecture in the age of programmability&rdquo;, ACM SIGCOMM CCR Editorial 2020.</li>
                <li>• <strong>Co-author:</strong> &ldquo;AutoKaggle: A Clean Meta-Dataset Solving All Kaggle Competitions&rdquo;, proceedings of ACM WSDM 2019.</li>
                <li>• <strong>Co-author:</strong> &ldquo;Continuous Security in IoT using Blockchain&rdquo;, proceedings of IEEE ICASSP 2018</li>
                <li>• <strong>First author:</strong> &ldquo;Gaze likelihood based clickable filtering&rdquo;, proceedings of ACM IHCI 2016.</li>
                <li>• <strong>Co-author:</strong> &ldquo;Investigating the Wisdom of Crowds at Scale&rdquo;, proceedings of ACM UIST 2015.</li>
                <li>• <strong>Author:</strong> &ldquo;Distributed Auto-Complete&rdquo;, <a href="https://bit.ly/distributed_autoComplete" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://bit.ly/distributed_autoComplete</a></li>
                <li>• <strong>Author:</strong> &ldquo;Rethinking network architecture for congestion control & network security in Data Centers&rdquo;, <a href="http://bit.ly/congestion_control" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">http://bit.ly/congestion_control</a> & <a href="http://bit.ly/security_network" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">http://bit.ly/security_network</a></li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-3">Patents</h3>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Co-inventor:</strong> &ldquo;Method and apparatus of continuous security in IOT environment using blockchain&rdquo;, USA: US15/956027, Filed Apr 18, 2017.
              </p>
            </div>
          </div>
        </section>

        {/* Programming Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Programming Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-lg">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {['C#', 'PowerShell', 'C', 'Python', 'Golang', 'C++', 'R', 'Prolog', 'Haskell', 'Matlab', 'Javascript', 'SQL'].map((skill) => (
                  <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="font-semibold mb-3 text-lg">Technologies/Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {['Azure', 'TensorFlow', 'PyTorch', 'Hyperledger', 'Pandas', 'ns-2', 'mininet', 'Scikit', 'Openstack', 'Kubernetes', 'Docker', 'OpenCV', 'ROS', 'Yesod', 'React', 'Distributed Systems', 'AI/ML'].map((skill) => (
                  <span key={skill} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Education</h2>
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Master of Science in Computer Science</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">New York University, New York, NY • May 2019</p>
              <p className="text-gray-600 dark:text-gray-400 font-medium">GPA: 3.8/4.0</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold">Bachelor of Technology in Computer Science</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">Indian Institute of Technology (IIT), Guwahati, India • May 2016</p>
              <p className="text-gray-600 dark:text-gray-400 font-medium">CGPA: 8.66/10.0</p>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Leadership</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold">IITG Alumni Seattle Chapter Head</h3>
              <p className="text-purple-600 dark:text-purple-400 font-medium">Jul 2023 - Present</p>
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                As an Alumni Chapter Head, my role primarily involves organizing events and programs to engage alumni, and promoting the university&rsquo;s goals among them. I maintain a strong alumni network, and facilitate communication between the university and alumni.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold">Microsoft Give Volunteer</h3>
              <p className="text-purple-600 dark:text-purple-400 font-medium">Jul 2019 - Present</p>
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                As a Microsoft Give volunteer I organized volunteering events to raise funds for my favourite non-profits.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold">Section Leader</h3>
              <p className="text-purple-600 dark:text-purple-400 font-medium">Sep 2017 - May 2019</p>
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                As a Section Leader, held office hours, conducted weekly tutorial classes for problem-solving, and prepared assignment questions for courses including Computer System Organization, Computer Networks, Introduction to Data Science, Programming Languages & Introduction to Computer Science.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold">Technical Secretary, Kameng Hostel, IITG</h3>
              <p className="text-purple-600 dark:text-purple-400 font-medium">April 2013 - April 2014</p>
              <p className="mt-3 text-gray-700 dark:text-gray-300">
                As a Technical Secretary, led multiple teams in various technical events like robotics, coding competitions etc.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">Let&rsquo;s Connect</h2>
          <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
            I&rsquo;m always interested in new opportunities and collaborations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:sak797@nyu.edu" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Send Email
            </a>
            <a 
              href="https://www.linkedin.com/in/saikondaveeti" 
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-colors"
            >
              LinkedIn Profile
            </a>
            <a 
              href="tel:5642309743" 
              className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-lg transition-colors"
            >
              Call Me
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 Sai Anirudh Kondaveeti. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
}
