export interface Post {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: Array<
    | { type: "heading" | "paragraph"; text: string }
    | { type: "code"; text: string; language: string }
  >;
}

export const posts: Post[] = [
  {
    id: "bevy-ecs-health-system",
    title: "Day 2: Health Regeneration System",
    date: "3 January 2026",
    excerpt:
      "Learning Bevy ECS by building a simple health regeneration system",
    content: [
      {
        type: "paragraph",
        text: "Another day, another... Bevy Learning Session ?! It's the second day and I actually did worked with Bevy. Amazing.",
      },
      {
        type: "paragraph",
        text: 'Today I learned by analysing the Bevy "ECS Guide" example on GitHub and let JARVIS create a task similar to what was explained. The result looks far from exciting but I forced myself to actually write all of this code and look it up in the docs whenever I needed to know the syntax of the function etc. And it actually helped me to understand some basics of Bevy.',
      },
      {
        type: "paragraph",
        text: "Here is the end result:",
      },
      {
        type: "code",
        language: "rust",
        text: `use std::time::Duration;  
use bevy::app::ScheduleRunnerPlugin;  
use bevy::prelude::*;  

fn main() {  
    App::new()  
        .add_plugins(ScheduleRunnerPlugin::run_loop(Duration::from_secs(1)))  
        .add_systems(Startup, startup)  
        .add_systems(Update, (counter_system, regeneration_system).chain())  
        .run();  
}  

#[derive(Component)]  
struct Name(String);  

#[derive(Component)]  
struct Health{  
    current: f32,  
    max: f32,  
}  

#[derive(Component)]  
struct Regeneration{  
    rate: f32  
}  

fn startup(mut commands: Commands){  
    commands.spawn_batch(vec![  
        (Name("Testo 1".to_string()), Health{current: 50.0, max: 100.0}, Regeneration{rate: 5.0}),  
        (Name("Testo 2".to_string()), Health{current: 80.0, max: 100.0}, Regeneration{rate: 10.0}),  
        (Name("Testo 3".to_string()), Health{current: 20.0, max: 100.0}, Regeneration{rate: 2.5}),  
    ]);  
}  

fn regeneration_system(mut query: Query<(Entity, &Name, &mut Health, &Regeneration)>){  
    for (entity, name, mut health, regeneration) in &mut query{  
        health.current = (health.current + regeneration.rate).min(health.max);  

        println!("Entity {} ({:?}): {:.1}/{:.1} HP",name.0, entity, health.current, health.max);  
    }  
}  

fn counter_system(mut counter: Local<u32>, mut app_exit_writer: MessageWriter<AppExit>){  
    *counter += 1;  
    println!("\\n--- Round {} ---", *counter);  

    if *counter == 10{  
        app_exit_writer.write(AppExit::Success);  
    }  
}`,
      },
      {
        type: "paragraph",
        text: "A very sophisticated health regeneration system.",
      },
      {
        type: "paragraph",
        text: "But even tho there is not much code and its very basic, I like the structure of it. The separation between Data Components and Systems is just amazing for my style of programming.",
      },
      {
        type: "paragraph",
        text: "What I definitely struggle with is the mut/&/* part. Understanding mut is simple but when and how to use & and * is still a challenge to me. But I just have to look it up for a moment and do some more sessions!",
      },
      {
        type: "paragraph",
        text: "Looking forward for the next one.",
      },
    ],
  },
  {
    id: "bevy-learning-start",
    title: "Moin!",
    date: "2 January 2026",
    excerpt: "Starting my journey with Bevy and Rust game development",
    content: [
      {
        type: "paragraph",
        text: "Once again I want to start learning Bevy for some fun rust game development. Mixed with new years resolutions I also never follow, I want to start experimenting with this blazingly fast game engine.",
      },
      {
        type: "paragraph",
        text: "Of course the first session consisted of 94% setup of a semi-related (non, if I'm honest to myself), future Bevy AI Agent God setup, which I want to build up simultaneously to this learning series. As if learning Rust, ECS, and Bevy wouldn't be enough.",
      },
      { type: "heading", text: "The Goal" },
      {
        type: "paragraph",
        text: "The Goal is getting back into Game Development, while learning stuff I'm interested in (Rust). Also I feel like I have to learn something new and challenging, because most of the time now I work with the same tech and tools, or better watch AI work with my tech and tools.",
      },
      { type: "heading", text: "Node Editor Project" },
      {
        type: "paragraph",
        text: 'Even though I studied Game Development and work with a Game Engine, my first idea or goal to work on in Bevy is a "Node Editor" like for Visual Scripting, Workflow Engines or Shader Tools. I really like to work with those systems and think its a very interesting project that has a wide complexity range, from simple squares in an "infinite" 2D space to an real time data simulation flow system with sub workflows etc.',
      },
      { type: "heading", text: "What to Expect" },
      {
        type: "paragraph",
        text: "My plan is to make small blog posts where I tell a bit about my experience with Bevy and my many pitfalls I will face. Also I will create a public repo where you can look into the masterwork of code.",
      },
      {
        type: "paragraph",
        text: "I hope I will get some interactions with you guys along the way, which would really help me to keep me motivated.",
      },
    ],
  },
];
