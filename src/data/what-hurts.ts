import type { ImageMetadata } from "astro";
import { imageAssets } from "./images";

export interface WhatHurtsImage {
  src: ImageMetadata;
  alt: string;
}

export interface WhatHurtsCondition {
  name: string;
  description: string;
}

export interface WhatHurtsCategory {
  name: string;
  introduction: string;
  image: WhatHurtsImage;
  conditions: WhatHurtsCondition[];
}

export const whatHurtsCategories: WhatHurtsCategory[] = [
  {
    name: "Spine",
    introduction:
      "Get exceptional care for spinal conditions at our clinic. We offer non-surgical and surgical options. Our experienced team aims to alleviate pain, improve your quality of life, and help you return to your favorite activities.",
    image: {
      src: imageAssets.neckNervePain,
      alt: "Illustration of cervical nerve pain in the neck and spine",
    },
    conditions: [
      {
        name: "Herniated Disc",
        description:
          "When the soft center of a spinal disc pushes through a crack in the tougher exterior casing, causing pain, numbness, or weakness in an arm or leg.",
      },
      {
        name: "Degenerative Disc Disease",
        description:
          "Wear and tear on the discs of the spine over time, leading to pain, stiffness, and reduced flexibility.",
      },
      {
        name: "Spinal Stenosis",
        description:
          "Narrowing of the spinal canal, which can compress the nerves and cause pain, numbness, or weakness in the arms or legs.",
      },
      {
        name: "Scoliosis",
        description:
          "Abnormal curvature of the spine, which can cause uneven shoulders, hips, or waist, and may lead to back pain or difficulty breathing.",
      },
      {
        name: "Spondylolisthesis",
        description:
          "When a vertebra slips out of place, often due to a stress fracture, causing lower back pain and sometimes leg pain or weakness.",
      },
      {
        name: "Spinal Fractures",
        description:
          "Breaks or cracks in the bones of the spine, which can result from trauma, osteoporosis, or other conditions, leading to pain and potential nerve damage.",
      },
      {
        name: "Sciatica",
        description:
          "Compression or irritation of the sciatic nerve, causing pain that radiates from the lower back down through the buttock and into the leg.",
      },
      {
        name: "Spinal Tumors",
        description:
          "Abnormal growths in or near the spinal cord, which can cause pain, weakness, numbness, or changes in bowel or bladder function.",
      },
      {
        name: "Facet Joint Syndrome",
        description:
          "Degeneration or inflammation of the facet joints in the spine, leading to stiffness, pain, and reduced range of motion.",
      },
      {
        name: "Radiculopathy",
        description:
          "Compression or irritation of a spinal nerve root, resulting in pain, numbness, tingling, or weakness that radiates along the nerve's pathway.",
      },
    ],
  },
  {
    name: "Shoulder",
    introduction:
      "Shoulder pain needs professional attention and diagnosis. Treatment may involve pain relievers, physical therapy, rest, or surgery. A personalized plan will be designed for you. Proper care effectively manages most cases.",
    image: {
      src: imageAssets.shoulderPain,
      alt: "Medical illustration highlighting pain around the shoulder joint",
    },
    conditions: [
      {
        name: "Rotator Cuff Tears",
        description:
          "Tears in the tendons of the rotator cuff muscles, which can occur due to overuse, trauma, or degeneration, leading to pain, weakness, and limited shoulder mobility.",
      },
      {
        name: "Shoulder Impingement Syndrome",
        description:
          "Compression or pinching of the tendons and bursa in the shoulder joint, often caused by repetitive overhead movements or structural abnormalities, resulting in pain, inflammation, and reduced range of motion.",
      },
      {
        name: "Frozen Shoulder (Adhesive Capsulitis)",
        description:
          "Stiffness and pain in the shoulder joint due to thickening and tightening of the shoulder capsule and surrounding tissues, leading to decreased mobility and difficulty performing daily activities.",
      },
      {
        name: "Shoulder Dislocation",
        description:
          "Displacement of the upper arm bone (humerus) from the shoulder socket (glenoid), typically resulting from trauma or repetitive stress, causing severe pain, instability, and limited movement until the joint is reduced.",
      },
      {
        name: "Shoulder Instability",
        description:
          "A condition characterized by excessive looseness or laxity in the shoulder joint, leading to recurrent dislocations or subluxations (partial dislocations), often caused by ligament or labral tears.",
      },
      {
        name: "Labral Tears",
        description:
          "Tears in the cartilage (labrum) that surrounds the shoulder socket, commonly occurring from trauma, repetitive overhead activities, or shoulder dislocations, causing pain, instability, and limited function.",
      },
      {
        name: "Bursitis",
        description:
          "Inflammation of the bursa, fluid-filled sacs that cushion the joints, often occurring in the subacromial or subacromial-subdeltoid bursa of the shoulder, resulting in pain, swelling, and limited mobility.",
      },
      {
        name: "Acromioclavicular (AC) Joint Injuries",
        description:
          "Injuries to the joint between the acromion (part of the shoulder blade) and the clavicle (collarbone), such as sprains, separations, or arthritis, causing pain, swelling, and difficulty with overhead movements.",
      },
      {
        name: "Shoulder Arthritis",
        description:
          "Degenerative changes in the shoulder joint, including osteoarthritis, rheumatoid arthritis, or post-traumatic arthritis, resulting in pain, stiffness, and decreased range of motion.",
      },
      {
        name: "Biceps Tendon Disorders",
        description:
          "Injuries or inflammation of the long head of the biceps tendon, such as tendinitis, tendinosis, or tears, leading to pain, weakness, and limited function, especially with overhead activities.",
      },
    ],
  },
  {
    name: "Knee",
    introduction:
      "The Knee Pain Clinic specializes in non-surgical treatments for knee pain, such as physical therapy, injections, and bracing. Our team of experts provides personalized care to help patients regain mobility and reduce pain.",
    image: {
      src: imageAssets.kneePain,
      alt: "Person experiencing knee pain",
    },
    conditions: [
      {
        name: "Anterior Cruciate Ligament (ACL) Injury",
        description:
          "Tears or sprains of the ACL, often occurring during sports activities or sudden twisting movements, leading to instability, swelling, and pain, and sometimes requiring surgical reconstruction.",
      },
      {
        name: "Meniscus Tears",
        description:
          "Tears in the meniscus, the cartilage pads that cushion the knee joint, typically caused by twisting or direct trauma, resulting in pain, swelling, stiffness, and sometimes locking or catching sensations.",
      },
      {
        name: "Patellar (Kneecap) Dislocation/Subluxation",
        description:
          "Displacement or partial displacement of the patella from its normal position in the femoral groove, usually due to a sudden change in direction or trauma, causing pain, swelling, and instability.",
      },
      {
        name: "Patellar Tendinitis (Jumper's Knee)",
        description:
          "Inflammation or irritation of the patellar tendon, which connects the patella to the shinbone (tibia), often caused by repetitive jumping or overuse, resulting in pain, tenderness, and stiffness in the front of the knee.",
      },
      {
        name: "Patellofemoral Pain Syndrome (Runner's Knee)",
        description:
          "Pain around or behind the patella, typically occurring during activities that involve bending the knee, such as running, jumping, or climbing stairs, due to abnormal tracking or alignment of the patella within the femoral groove.",
      },
      {
        name: "Osteoarthritis",
        description:
          "Degeneration of the cartilage in the knee joint, resulting from wear and tear over time, leading to pain, stiffness, swelling, and decreased mobility, especially with weight-bearing activities.",
      },
      {
        name: "Rheumatoid Arthritis",
        description:
          "Chronic inflammatory arthritis affecting the knee joint, resulting from an autoimmune reaction, causing pain, swelling, stiffness, and potential joint deformities.",
      },
      {
        name: "Iliotibial Band Syndrome (ITBS)",
        description:
          "Inflammation or irritation of the iliotibial band, a thick band of tissue that runs along the outside of the thigh from the hip to the shinbone, often caused by overuse or repetitive motion, leading to pain on the outside of the knee during activities such as running or cycling.",
      },
      {
        name: "Posterior Cruciate Ligament (PCL) Injury",
        description:
          "Tears or sprains of the PCL, often resulting from direct impact to the front of the knee or hyperextension, causing posterior knee pain, swelling, instability, and difficulty with activities that involve bending or straightening the knee.",
      },
      {
        name: "Knee Fractures",
        description:
          "Fractures of the bones in the knee joint, including the femur, tibia, or patella, usually resulting from trauma such as falls, accidents, or sports injuries, causing pain, swelling, bruising, and difficulty bearing weight on the affected leg.",
      },
    ],
  },
  {
    name: "Foot & Ankle",
    introduction:
      "Foot and ankle pain can stem from injuries, medical conditions, or overuse. Prompt treatment can ease symptoms and prevent complications. Treatment options include rest, physical therapy, medication, or surgery based on the underlying cause and severity.",
    image: {
      src: imageAssets.footAnkle,
      alt: "Person holding a painful foot and ankle",
    },
    conditions: [
      {
        name: "Ankle Sprains",
        description:
          "Stretching or tearing of the ligaments that support the ankle joint, often resulting from a sudden twist or turn of the foot, causing pain, swelling, and instability.",
      },
      {
        name: "Plantar Fasciitis",
        description:
          "Inflammation of the plantar fascia, a thick band of tissue that runs along the bottom of the foot, typically causing heel pain, especially with the first steps in the morning or after prolonged periods of rest.",
      },
      {
        name: "Achilles Tendinitis/Tendonitis",
        description:
          "Inflammation of the Achilles tendon, the large tendon at the back of the ankle that connects the calf muscles to the heel bone, causing pain and stiffness along the back of the leg and heel.",
      },
      {
        name: "Bunions (Hallux Valgus)",
        description:
          "Abnormal bony bumps that form on the joint at the base of the big toe, often due to improper footwear, genetics, or structural deformities, causing pain, swelling, and difficulty wearing shoes.",
      },
      {
        name: "Ingrown Toenails",
        description:
          "When the edge of a toenail grows into the surrounding skin, often leading to pain, redness, swelling, and sometimes infection.",
      },
      {
        name: "Metatarsalgia",
        description:
          "Pain and inflammation in the ball of the foot, typically caused by overuse, improper footwear, or structural abnormalities, resulting in pain, numbness, or a burning sensation in the toes and forefoot.",
      },
      {
        name: "Hammer Toe",
        description:
          "Abnormal bending or curling of the toes, usually affecting the second, third, or fourth toes, causing pain, corns, calluses, and difficulty fitting into shoes.",
      },
      {
        name: "Flat Feet (Pes Planus)",
        description:
          "A condition where the arch of the foot collapses, leading to overpronation (inward rolling) of the foot during walking or running, potentially causing pain, fatigue, and difficulty with balance and stability.",
      },
      {
        name: "High Arches (Pes Cavus)",
        description:
          "A condition characterized by an abnormally high arch in the foot, causing excessive pressure on the heel and ball of the foot, leading to pain, instability, and increased risk of ankle sprains and stress fractures.",
      },
      {
        name: "Tarsal Tunnel Syndrome",
        description:
          "Compression or irritation of the tibial nerve as it passes through the tarsal tunnel, located on the inside of the ankle, resulting in pain, numbness, tingling, or weakness in the foot and toes.",
      },
    ],
  },
  {
    name: "Elbow",
    introduction:
      "Elbow pain can be caused by overuse, trauma, arthritis, or tendinitis. Treatment options vary and may include rest, physical therapy, medication, or surgery. Seek medical attention if pain persists or worsens.",
    image: {
      src: imageAssets.elbow,
      alt: "Person holding a painful elbow",
    },
    conditions: [
      {
        name: "Tennis Elbow (Lateral Epicondylitis)",
        description:
          "Inflammation or degeneration of the tendons on the outside of the elbow, typically caused by repetitive motions of the wrist and forearm, leading to pain and tenderness on the outer aspect of the elbow.",
      },
      {
        name: "Golfer's Elbow (Medial Epicondylitis)",
        description:
          "Inflammation or degeneration of the tendons on the inside of the elbow, usually due to repetitive gripping and swinging motions, resulting in pain and tenderness on the inner aspect of the elbow.",
      },
      {
        name: "Elbow Bursitis",
        description:
          "Inflammation of the bursa, fluid-filled sacs that cushion the bones and tendons around the elbow joint, often caused by repetitive pressure or trauma, resulting in pain, swelling, and limited range of motion.",
      },
      {
        name: "Olecranon Fracture",
        description:
          "Fracture of the olecranon, the bony prominence at the back of the elbow, typically resulting from a direct blow or fall onto the elbow, causing pain, swelling, and difficulty bending or straightening the arm.",
      },
      {
        name: "Elbow Dislocation",
        description:
          "Displacement of the bones that form the elbow joint, usually caused by trauma or a fall onto an outstretched hand, resulting in severe pain, swelling, and deformity of the elbow joint.",
      },
      {
        name: "Radial Head Fracture",
        description:
          "Fracture of the radial head, the top part of the radius bone near the elbow joint, often occurring due to a fall onto an outstretched hand, causing pain, swelling, and limited range of motion.",
      },
      {
        name: "Olecranon Bursitis",
        description:
          "Inflammation of the bursa located over the olecranon, typically caused by repetitive pressure or trauma, resulting in pain, swelling, and a visible lump at the back of the elbow.",
      },
      {
        name: "Elbow Arthritis",
        description:
          "Degenerative changes in the elbow joint, including osteoarthritis or rheumatoid arthritis, leading to pain, stiffness, swelling, and decreased range of motion.",
      },
      {
        name: "Ulnar Nerve Entrapment (Cubital Tunnel Syndrome)",
        description:
          "Compression or irritation of the ulnar nerve as it passes through the cubital tunnel at the elbow, resulting in pain, numbness, tingling, or weakness in the forearm and hand.",
      },
      {
        name: "Elbow Tendon Ruptures",
        description:
          "Rupture or tear of the tendons that attach muscles to the bones around the elbow joint, such as the biceps tendon or triceps tendon, often caused by sudden force or overuse, resulting in pain, weakness, and functional impairment.",
      },
    ],
  },
  {
    name: "Hip",
    introduction:
      "Hip pain has many causes like arthritis, bursitis, tendinitis, fractures, strains, impingement, tears, and more. Factors like lifestyle and trauma may also contribute. It's important to see a healthcare provider for an evaluation to diagnose and treat the root cause.",
    image: {
      src: imageAssets.hipPain,
      alt: "Medical illustration highlighting pain around the hip joint",
    },
    conditions: [
      {
        name: "Osteoarthritis of the Hip",
        description:
          "Degenerative joint disease characterized by the breakdown of cartilage in the hip joint, leading to pain, stiffness, swelling, and decreased range of motion, especially with weight-bearing activities.",
      },
      {
        name: "Hip Fractures",
        description:
          "Breaks or cracks in the bones of the hip, often occurring due to falls, trauma, or osteoporosis, causing severe pain, swelling, and inability to bear weight on the affected leg.",
      },
      {
        name: "Hip Bursitis",
        description:
          "Inflammation of the bursae, small fluid-filled sacs that cushion the hip joint, typically caused by overuse, trauma, or prolonged pressure on the hip, resulting in pain, swelling, and tenderness on the outer aspect of the hip.",
      },
      {
        name: "Hip Labral Tears",
        description:
          "Tears in the labrum, the cartilage ring that lines the hip socket, often caused by trauma, repetitive motions, or structural abnormalities, leading to pain, clicking or catching sensations, and limited hip mobility.",
      },
      {
        name: "Femoroacetabular Impingement (FAI)",
        description:
          "Abnormal contact between the femoral head and acetabulum (hip socket), resulting from bony overgrowth or structural abnormalities, causing pain, stiffness, and decreased range of motion, especially with hip flexion or rotation.",
      },
      {
        name: "Hip Dysplasia",
        description:
          "Abnormal development of the hip joint, resulting in instability, reduced range of motion, and increased risk of hip dislocation or osteoarthritis, commonly diagnosed in infants or young adults.",
      },
      {
        name: "Avascular Necrosis (Osteonecrosis) of the Hip",
        description:
          "Death of bone tissue in the hip joint due to poor blood supply, often caused by trauma, corticosteroid use, alcoholism, or certain medical conditions, resulting in pain, stiffness, and eventual collapse of the joint surface.",
      },
      {
        name: "Hip Tendonitis",
        description:
          "Inflammation or irritation of the tendons surrounding the hip joint, such as the iliopsoas tendon or gluteal tendons, typically caused by overuse, repetitive motions, or sudden increase in activity, leading to pain, weakness, and limited hip mobility.",
      },
      {
        name: "Hip Dislocation",
        description:
          "Displacement of the femoral head from the acetabulum, usually resulting from trauma, falls, or high-impact injuries, causing severe pain, swelling, and inability to move the hip joint.",
      },
      {
        name: "Snapping Hip Syndrome",
        description:
          "Audible or palpable snapping sensations in the hip joint during movement, often caused by tight muscles or tendons rubbing over bony structures, leading to pain, discomfort, and limited hip mobility.",
      },
    ],
  },
  {
    name: "Hand & Wrist",
    introduction:
      "Repetitive use, arthritis, injury, tendinitis, and poor posture can cause hand and wrist pain. Health problems like diabetes can contribute. To prevent pain, rest, follow good ergonomics, seek medical attention.",
    image: {
      src: imageAssets.handWrist,
      alt: "Person holding a painful hand and wrist",
    },
    conditions: [
      {
        name: "Carpal Tunnel Syndrome",
        description:
          "Compression of the median nerve as it passes through the carpal tunnel in the wrist, often due to repetitive motions, injury, or underlying conditions such as arthritis, causing pain, numbness, tingling, and weakness in the thumb, index, middle, and half of the ring finger.",
      },
      {
        name: "Trigger Finger (Stenosing Tenosynovitis)",
        description:
          "Condition where the flexor tendon sheath in the finger becomes inflamed or thickened, leading to catching or locking of the affected finger in a bent position, often accompanied by pain and stiffness.",
      },
      {
        name: "De Quervain's Tenosynovitis",
        description:
          "Inflammation of the tendons at the base of the thumb, usually caused by repetitive thumb movements or overuse, resulting in pain, swelling, and difficulty gripping or pinching.",
      },
      {
        name: "Ganglion Cysts",
        description:
          "Noncancerous lumps filled with synovial fluid that typically develop along tendons or joints in the hand or wrist, causing pain, swelling, and restricted movement.",
      },
      {
        name: "Dupuytren's Contracture",
        description:
          "Progressive thickening and tightening of the tissue beneath the skin of the palm, leading to the formation of nodules or cords that can pull one or more fingers into a bent position, resulting in difficulty straightening the affected fingers.",
      },
      {
        name: "Wrist Sprains",
        description:
          "Stretching or tearing of ligaments in the wrist, often caused by falls or sudden twisting motions, resulting in pain, swelling, and instability.",
      },
      {
        name: "Fractures",
        description:
          "Breaks or cracks in the bones of the hand or wrist, usually resulting from trauma, falls, or repetitive stress, causing pain, swelling, and sometimes deformity.",
      },
      {
        name: "Arthritis",
        description:
          "Degenerative joint disease affecting the hand or wrist, including osteoarthritis, rheumatoid arthritis, or post-traumatic arthritis, resulting in pain, stiffness, swelling, and reduced range of motion.",
      },
      {
        name: "Tendonitis/Tendinosis",
        description:
          "Inflammation or degeneration of the tendons in the hand or wrist, often caused by overuse, repetitive movements, or injury, leading to pain, swelling, and weakness.",
      },
      {
        name: "Cubital Tunnel Syndrome",
        description:
          "Compression or irritation of the ulnar nerve as it passes through the cubital tunnel at the elbow, resulting in pain, numbness, tingling, or weakness in the hand and fingers, especially the ring and little fingers.",
      },
    ],
  },
  {
    name: "Rheumatic Conditions",
    introduction:
      "100+ rheumatic conditions cause joint and muscle pain, swelling, stiffness, and organ damage. Examples include lupus and rheumatoid arthritis. Causes are unknown but genetics, lifestyle, and environment may play a role. Treatment varies and may involve medication, therapy, or surgery.",
    image: {
      src: imageAssets.rheumaticConditions,
      alt: "Hands affected by rheumatic joint pain",
    },
    conditions: [
      {
        name: "Rheumatoid Arthritis (RA)",
        description:
          "A chronic autoimmune disease that affects the joints, causing inflammation, pain, swelling, and stiffness, commonly affecting the hands, wrists, knees, and feet.",
      },
      {
        name: "Ankylosing Spondylitis",
        description:
          "A type of inflammatory arthritis that primarily affects the spine, causing stiffness, pain, and fusion of the vertebrae, leading to decreased mobility and flexibility of the spine.",
      },
      {
        name: "Psoriatic Arthritis",
        description:
          "A form of arthritis that occurs in some people with psoriasis, causing inflammation in the joints, as well as skin and nail changes, commonly affecting the fingers, toes, wrists, knees, and ankles.",
      },
      {
        name: "Systemic Lupus Erythematosus (SLE)",
        description:
          "An autoimmune disease that can affect multiple organs and systems in the body, including the joints, causing inflammation, pain, stiffness, and swelling, often accompanied by skin rashes, fatigue, and systemic symptoms.",
      },
      {
        name: "Gout",
        description:
          "A type of arthritis characterized by sudden, severe attacks of pain, redness, swelling, and warmth in the joints, typically affecting the big toe, but can also involve the ankles, knees, wrists, and fingers, caused by the buildup of uric acid crystals in the joints.",
      },
      {
        name: "Juvenile Idiopathic Arthritis (JIA)",
        description:
          "A group of inflammatory joint disorders that occur in children under the age of 16, causing pain, stiffness, swelling, and decreased mobility in one or more joints.",
      },
      {
        name: "Fibromyalgia",
        description:
          "A chronic condition characterized by widespread musculoskeletal pain, fatigue, sleep disturbances, and tender points throughout the body, often associated with other rheumatic conditions such as arthritis.",
      },
      {
        name: "Sjögren's Syndrome",
        description:
          "An autoimmune disorder that primarily affects the glands that produce tears and saliva, causing dry eyes and mouth, but can also involve joint pain, inflammation, and fatigue.",
      },
      {
        name: "Polymyalgia Rheumatica (PMR)",
        description:
          "An inflammatory condition that causes pain and stiffness in the shoulders, neck, hips, and thighs, typically affecting older adults, often associated with temporal arteritis.",
      },
      {
        name: "Temporal Arteritis (Giant Cell Arteritis)",
        description:
          "An inflammatory condition that affects the arteries, particularly those in the head and neck, causing headaches, scalp tenderness, jaw pain, and vision changes, commonly associated with PMR.",
      },
    ],
  },
  {
    name: "Trauma",
    introduction:
      "Clinic trauma care provides immediate evaluation and treatment for patients who have suffered physical or emotional trauma. Out team works together to provide comprehensive care to prevent long-term complications and improve outcomes.",
    image: {
      src: imageAssets.trauma,
      alt: "Injured motorcyclist beside a fallen motorcycle",
    },
    conditions: [
      {
        name: "Fractures",
        description:
          "Breaks or cracks in bones resulting from trauma, such as falls, sports injuries, or accidents.",
      },
      {
        name: "Dislocations",
        description:
          "Joint injuries where the bones are forced out of their normal positions, often causing severe pain and loss of joint function.",
      },
      {
        name: "Sprains and Strains",
        description:
          "Injuries to ligaments (sprains) or muscles and tendons (strains) due to overstretching or tearing, commonly occurring during sports activities or sudden movements.",
      },
      {
        name: "Soft Tissue Injuries",
        description:
          "Damage to soft tissues surrounding the bones, including bruises, contusions, lacerations, and abrasions, often caused by direct trauma or repetitive stress.",
      },
      {
        name: "Traumatic Amputations",
        description:
          "Severe injuries resulting in the partial or complete loss of a limb or extremity, requiring immediate medical attention and potentially surgical intervention for limb salvage or prosthetic fitting.",
      },
      {
        name: "Crush Injuries",
        description:
          "Trauma caused by a significant force or pressure applied to a specific body part, leading to tissue damage, compartment syndrome, and potential loss of function.",
      },
      {
        name: "Open Wounds",
        description:
          "Injuries where the skin is broken, exposing underlying tissues to the external environment, increasing the risk of infection and requiring prompt wound care and possibly surgical closure.",
      },
      {
        name: "Polytrauma",
        description:
          "Multiple severe injuries sustained simultaneously, often involving various parts of the body, which may require a multidisciplinary approach for comprehensive management and rehabilitation.",
      },
      {
        name: "Traumatic Joint Injuries",
        description:
          "Injuries to the joints, such as the shoulder, knee, or ankle, including ligament tears (e.g., ACL tear), meniscus tears, and cartilage damage, often requiring surgical intervention for stabilization and repair.",
      },
      {
        name: "Complications of Trauma",
        description:
          "Secondary complications arising from traumatic injuries, such as nerve damage, vascular injuries, compartment syndrome, and post-traumatic arthritis, which may necessitate specialized treatment to prevent long-term disability or impairment.",
      },
    ],
  },
];
