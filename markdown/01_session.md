# Moin!

Another day, another... Bevy Learning Session ?! It's the second day and I actually did worked with Bevy. Amazing.

## Learning by Example

Today I learned by analysing the Bevy ["ECS Guide" example on GitHub](https://github.com/bevyengine/bevy/blob/main/examples/ecs/ecs_guide.rs) and let JARVIS create a task similar to what was explained. The result looks far from exciting but I forced myself to actually write all of this code and look it up in the docs whenever I needed to know the syntax of the function etc. And it actually helped me to understand some basics of Bevy.

### The Result

Here is the end result:

```rust
use std::time::Duration;
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
    println!("\n--- Round {} ---", *counter);

    if *counter == 10{
        app_exit_writer.write(AppExit::Success);
    }
}
```

A very sophisticated health regeneration system.

## First Impressions

But even tho there is not much code and its very basic, I like the structure of it. The separation between Data Components and Systems is just amazing for my style of programming.

### Current Struggles

What I definitely struggle with is the mut/&/_ part. Understanding mut is simple but when and how to use & and _ is still a challenge to me. But I just have to look it up for a moment and do some more sessions!

---

Looking forward for the next one.
