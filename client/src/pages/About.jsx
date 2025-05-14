export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div>
          <h1 className="text-3xl font-semibold text-center my-7">
            About TrueBlog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to TrueBlog — a space where passion for software engineering meets a love for lifelong learning. I'm Evans, a dedicated software engineer who embraces every challenge as a chance to grow. Whether it's solving complex coding problems or navigating life’s unpredictable paths, I believe in showing up with resilience, curiosity, and an open mind.
            </p>
            <p>
              Here, you’ll find weekly articles and hands-on tutorials focused on web development, software engineering best practices, and programming languages. I regularly explore modern technologies, frameworks, and tools, sharing my experiences, lessons, and tips along the way. Whether you're a beginner or an experienced developer, there's something here for everyone.
            </p>
            <p>
              This blog isn't just a monologue — it's a community. You're encouraged to share your thoughts in the comments, engage with others, and exchange knowledge. Like, reply, and be part of the conversation — because we grow stronger when we learn together.
            </p>
            <span className="italic text-end">
              Have feedback or design suggestions? Don’t hesitate to share — I’d love to hear from you!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
