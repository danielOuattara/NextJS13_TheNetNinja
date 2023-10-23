import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi beatae
        incidunt quis tempora corporis culpa praesentium, alias natus laudantium
        libero molestias, odio quibusdam commodi, error consectetur perferendis
        illo illum quae!
      </p>

      <div className="flex justify-center my-8">
        <Link href="/tickets">
          <button className="btn-primary">View Tickets</button>
        </Link>
      </div>

      <h2>Company Updates</h2>
      <div className="card">
        <h3>New member og the web dev team ...</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          maxime repudiandae odio voluptas laborum, dolorum quam porro error
          cupiditate cum doloremque ea est facilis consequuntur molestiae animi
          fuga, beatae obcaecati.
        </p>
      </div>
      <div className="card">
        <h3>New web site live !</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          maxime repudiandae odio voluptas laborum, dolorum quam porro error
          cupiditate cum doloremque ea est facilis consequuntur molestiae animi
          fuga, beatae obcaecati.
        </p>
      </div>
    </main>
  );
}

// about.jsx -> /about
