import type { ImageMetadata } from "astro";
import { imageAssets } from "./images";

export interface GuideReference {
  title: string;
  publisher: string;
  url: string;
}

export interface PatientGuide {
  id: string;
  category: "Danger signs" | "Health tips" | "Myths and facts";
  title: string;
  description: string;
  published: string;
  updated: string;
  paragraphs: string[];
  points: { label?: string; text: string }[];
  closing?: string;
  image: { src: ImageMetadata; alt: string };
  references: GuideReference[];
}

const published = "2024-04-23";
const updated = "2026-07-22";

export const patientGuides: PatientGuide[] = [
  {
    id: "wound-care",
    category: "Health tips",
    title: "Tips on wound care",
    description: "Basic steps for cleaning, protecting and monitoring a wound, including signs that require medical attention.",
    published,
    updated,
    paragraphs: ["Wound care involves steps to clean, protect and promote healing of a wound. The following are some basic steps for wound care:"],
    points: [
      { label: "Clean the wound", text: "Remove any dirt or debris using saline solution or soap and water." },
      { label: "Protect the wound", text: "Cover the wound with a sterile bandage to reduce contamination." },
      { label: "Promote healing", text: "Keep the wound covered with an appropriate dressing, use antibiotics only if prescribed, and elevate the affected area if advised to reduce swelling." },
      { label: "Monitor the wound", text: "Watch for increasing redness, warmth, swelling, pain, discharge, an unpleasant smell or fever." },
      { label: "Seek medical attention", text: "Seek medical care if the wound is deep, large, contaminated, caused by a bite or shows signs of infection." },
    ],
    closing: "The correct steps depend on the wound’s type, severity and location. Follow instructions from a healthcare professional when they differ from general guidance.",
    image: { src: imageAssets.surgery, alt: "Surgical team providing patient care" },
    references: [
      { title: "Cuts and grazes", publisher: "NHS", url: "https://www.nhs.uk/conditions/cuts-and-grazes/" },
      { title: "How wounds heal", publisher: "MedlinePlus", url: "https://medlineplus.gov/ency/patientinstructions/000741.htm" },
    ],
  },
  {
    id: "exercises-over-50",
    category: "Health tips",
    title: "Best exercises for those over 50",
    description: "Low-impact aerobic, strength, flexibility and balance activities that can support healthy ageing and mobility.",
    published,
    updated,
    paragraphs: [
      "Joint pain and stiffness can make people less active, which may further reduce strength, flexibility and mobility. Regular movement can support bone, joint and cardiovascular health as people age.",
      "A balanced routine can include aerobic activity, muscle strengthening, flexibility and balance work. Begin gradually and choose activities appropriate to your current health and ability.",
    ],
    points: [
      { label: "Walking", text: "A low-impact activity whose duration and pace can be adjusted to your fitness level." },
      { label: "Swimming or water exercise", text: "Water supports body weight while allowing cardiovascular and strengthening exercise with less joint loading." },
      { label: "Cycling", text: "A lower-impact aerobic option that can be performed indoors or outdoors." },
      { label: "Strength training", text: "Progressive resistance exercise helps maintain muscle and bone strength." },
      { label: "Yoga and balance work", text: "Appropriate exercises can support flexibility, balance and body control." },
    ],
    closing: "Stop if exercise causes chest pain, severe shortness of breath, dizziness or sudden pain. Seek individual advice if you have symptoms, a chronic condition, recent surgery or uncertainty about safe intensity.",
    image: { src: imageAssets.exercisesOver50, alt: "Older adults performing supervised resistance exercises" },
    references: [
      { title: "Staying Active As You Age", publisher: "AAOS OrthoInfo", url: "https://orthoinfo.aaos.org/en/staying-healthy/staying-active-as-you-age/" },
      { title: "Physical activity guidelines for older adults", publisher: "NHS", url: "https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-older-adults/" },
    ],
  },
  {
    id: "healthy-spine",
    category: "Health tips",
    title: "Healthy spine tips",
    description: "Practical guidance on activity, strength, workstation setup, sleep comfort and professional assessment for spine health.",
    published,
    updated,
    paragraphs: ["A healthy spine benefits from regular movement, supportive muscles and attention to activities that provoke symptoms."],
    points: [
      { label: "Maintain a healthy weight", text: "Weight management may reduce physical load on the spine and can support general health." },
      { label: "Exercise regularly", text: "Activity helps maintain flexibility and strengthens muscles that support the trunk and posture." },
      { label: "Review your workstation", text: "Adjust your chair, desk and screen where possible, and change position regularly rather than trying to hold one posture all day." },
      { label: "Pay attention to injuries", text: "Seek assessment after significant trauma or when pain, weakness or numbness persists or worsens." },
      { label: "Choose comfortable bedding", text: "Mattress and pillow preferences vary. Choose bedding that supports comfortable sleep without aggravating symptoms." },
      { label: "Seek an assessment when needed", text: "A professional assessment can help identify the cause of persistent pain and guide appropriate care." },
    ],
    image: { src: imageAssets.healthySpine, alt: "Woman performing a bird-dog trunk stability exercise" },
    references: [
      { title: "Spine Conditioning Program", publisher: "AAOS OrthoInfo", url: "https://orthoinfo.aaos.org/en/recovery/spine-conditioning-program/" },
      { title: "Low Back Pain", publisher: "AAOS OrthoInfo", url: "https://orthoinfo.aaos.org/en/diseases--conditions/low-back-pain/" },
    ],
  },
  {
    id: "spine-surgery-myths",
    category: "Myths and facts",
    title: "Spine surgery: myths and facts",
    description: "Common misconceptions about spine surgery, including invasiveness, timing, risk and recovery.",
    published,
    updated,
    paragraphs: ["A recommendation for spine surgery depends on the diagnosis, neurological findings, symptom severity, imaging and response to non-operative care. Benefits, risks and alternatives differ between procedures and patients."],
    points: [
      { label: "Myth", text: "Spine surgery is always highly invasive and always involves a long recovery." },
      { label: "Fact", text: "Some operations can use minimally invasive approaches, but suitability and recovery depend on the procedure and individual patient." },
      { label: "Myth", text: "Spine surgery is only considered after every other treatment has failed." },
      { label: "Fact", text: "Many patients first receive non-operative care, while progressive neurological loss, instability, severe compression or some injuries may require earlier surgical assessment." },
      { label: "Myth", text: "Every spine operation carries the same complication risk." },
      { label: "Fact", text: "Risk varies by operation, diagnosis and individual health. Rehabilitation and follow-up are important parts of recovery." },
    ],
    image: { src: imageAssets.spineSurgeryMyths, alt: "Surgical team performing a spinal operation" },
    references: [
      { title: "Preparing for Low Back Surgery", publisher: "AAOS OrthoInfo", url: "https://orthoinfo.aaos.org/en/treatment/preparing-for-low-back-surgery/" },
      { title: "Spinal Fusion", publisher: "AAOS OrthoInfo", url: "https://orthoinfo.aaos.org/en/treatment/spinal-fusion/" },
    ],
  },
  {
    id: "healthy-knees",
    category: "Health tips",
    title: "Tips to maintain healthy knees",
    description: "Ways to support knee strength and mobility through activity, footwear, progressive loading and weight management.",
    published,
    updated,
    paragraphs: ["Knees are mobile, weight-bearing joints. Strength, movement and sensible progression of activity can help support their function."],
    points: [
      { label: "Maintain a healthy weight", text: "Extra body weight increases load through the knees during daily activity." },
      { label: "Exercise regularly", text: "Activity strengthens muscles around the knees and maintains range of motion. Swimming and cycling are lower-impact options." },
      { label: "Wear suitable shoes", text: "Choose footwear appropriate to the activity, your comfort and any individual support needs." },
      { label: "Warm up and progress gradually", text: "Prepare for activity and increase training load over time rather than making sudden changes." },
      { label: "Take movement breaks", text: "If work or a hobby involves prolonged kneeling, squatting or sitting, change position and move regularly." },
      { label: "Build strength and control", text: "Exercises for the thighs, hips and trunk can support knee movement and stability." },
      { label: "Respond to pain", text: "Reduce or modify activity if pain is significant, and seek assessment for persistent swelling, instability or loss of function." },
      { label: "Lift safely", text: "Use a stable stance, keep loads close and avoid twisting under heavy load." },
    ],
    image: { src: imageAssets.kneePain, alt: "Person supporting a painful knee" },
    references: [{ title: "Knee Conditioning Program", publisher: "AAOS OrthoInfo", url: "https://orthoinfo.aaos.org/en/recovery/knee-conditioning-program/" }],
  },
  {
    id: "workout-pain",
    category: "Danger signs",
    title: "Pain after workouts and sports",
    description: "How to recognise expected post-exercise muscle soreness and warning signs that may indicate injury or illness.",
    published,
    updated,
    paragraphs: [
      "Delayed-onset muscle soreness, or DOMS, can develop after unfamiliar or intense activity, particularly exercise involving lengthening muscle contractions. Soreness commonly increases over the first 24 to 48 hours and then gradually improves.",
      "Mild stiffness and tenderness can be expected. Severe pain, major swelling, inability to use a limb, dark urine, reduced urination, fever or symptoms that continue to worsen require medical assessment.",
    ],
    points: [
      { label: "Recover gradually", text: "Temporarily reduce intensity while keeping comfortable movement where possible." },
      { label: "Use heat or cold for comfort", text: "Either may provide temporary symptom relief depending on personal preference." },
      { label: "Massage gently", text: "Gentle massage may reduce the sensation of stiffness for some people." },
      { label: "Return progressively", text: "Resume harder training in stages after movement and strength recover." },
      { label: "Rest from painful loading", text: "Do not train through sharp pain or substantial loss of function." },
    ],
    closing: "Seek urgent care after a suspected fracture, dislocation, severe head or spine injury, or rapidly worsening symptoms.",
    image: { src: imageAssets.footAnkle, alt: "Person supporting a painful heel and ankle" },
    references: [{ title: "Muscle aches", publisher: "MedlinePlus", url: "https://medlineplus.gov/ency/article/003178.htm" }],
  },
  {
    id: "healthy-neck",
    category: "Health tips",
    title: "Tips to maintain a healthy cervical spine and neck",
    description: "Movement, posture, device positioning and sleep-comfort tips for maintaining neck mobility and reducing strain.",
    published,
    updated,
    paragraphs: ["Neck pain commonly arises from muscles and joints, while nerve irritation can cause pain, tingling, numbness or weakness into an arm or hand."],
    points: [
      { label: "Exercise regularly", text: "Appropriate activity can strengthen supporting muscles and maintain flexibility and range of motion." },
      { label: "Use a comfortable neutral position", text: "Avoid holding the head in one position for prolonged periods." },
      { label: "Avoid excessive strain", text: "Limit repeated or forceful twisting and bending that provokes symptoms." },
      { label: "Take breaks", text: "Move and stretch when sitting or standing in one position for long periods." },
      { label: "Use a comfortable pillow", text: "Choose a pillow that allows a comfortable sleep position without worsening symptoms." },
      { label: "Raise phones and tablets", text: "Bring devices closer to eye level and change position regularly." },
    ],
    closing: "Seek assessment if neck pain persists, follows significant trauma or occurs with progressive weakness, numbness, balance difficulty or loss of hand coordination.",
    image: { src: imageAssets.healthyNeck, alt: "Woman gently stretching her neck at home" },
    references: [
      { title: "Neck pain", publisher: "NHS", url: "https://www.nhs.uk/conditions/neck-pain-and-stiff-neck/" },
      { title: "Spine Conditioning Program", publisher: "AAOS OrthoInfo", url: "https://orthoinfo.aaos.org/en/recovery/spine-conditioning-program/" },
    ],
  },
  {
    id: "surgical-wound",
    category: "Health tips",
    title: "How to take care of a surgical wound",
    description: "General surgical wound-care guidance covering cleaning, dressings, activity, infection signs and follow-up.",
    published,
    updated,
    paragraphs: ["Wound instructions vary with the operation, closure, dressing and presence of drains. Follow your surgical team’s discharge instructions when they differ from general advice."],
    points: [
      { label: "Keep the wound clean", text: "Clean the site only as instructed. Do not soak the wound until your surgical team says it is safe." },
      { label: "Change dressings as instructed", text: "Use clean hands and the dressing method recommended by your care team." },
      { label: "Protect the surgical site", text: "Follow activity restrictions intended to prevent the wound reopening or becoming irritated." },
      { label: "Take prescribed medicines", text: "Use antibiotics or pain medicine only as directed." },
      { label: "Avoid smoking", text: "Smoking can delay healing and increase complication risk." },
      { label: "Eat a balanced diet", text: "Adequate energy, protein, vitamins and minerals support healing." },
      { label: "Watch for infection", text: "Increasing pain, spreading redness, warmth, swelling, discharge, an unpleasant smell or fever require medical advice." },
      { label: "Attend follow-up", text: "Keep scheduled reviews and contact the surgical team with concerns." },
      { label: "Avoid unapproved products", text: "Do not apply creams, powders or ointments unless instructed." },
    ],
    closing: "Seek urgent medical advice if the wound opens, bleeding does not stop, infection signs are worsening or you become systemically unwell.",
    image: { src: imageAssets.surgicalWoundCare, alt: "Clean gauze dressing material for wound care" },
    references: [
      { title: "Surgical wound care - closed", publisher: "MedlinePlus", url: "https://medlineplus.gov/ency/patientinstructions/000738.htm" },
      { title: "Surgical wound care - open", publisher: "MedlinePlus", url: "https://medlineplus.gov/ency/patientinstructions/000040.htm" },
    ],
  },
  {
    id: "neck-pain-myths",
    category: "Myths and facts",
    title: "Neck pain: myths and facts",
    description: "Evidence-informed clarification of common misconceptions about posture, rest, treatment and the seriousness of neck pain.",
    published,
    updated,
    paragraphs: ["Neck pain has many possible causes and should be assessed in the context of symptoms, examination and medical history."],
    points: [
      { label: "Myth", text: "Neck pain is always caused by poor posture." },
      { label: "Fact", text: "Sustained positions can contribute, but injury, joint or disc changes, nerve irritation and other conditions may also cause symptoms." },
      { label: "Myth", text: "You should always rest your neck until pain disappears." },
      { label: "Fact", text: "Brief modification may help, but comfortable movement and a gradual return to activity are often appropriate." },
      { label: "Myth", text: "One treatment works for every type of neck pain." },
      { label: "Fact", text: "Advice, exercise, medication, injections or surgery may be considered depending on the diagnosis and individual circumstances." },
      { label: "Myth", text: "Neck pain is always a serious problem." },
      { label: "Fact", text: "Many episodes improve, but trauma, fever, progressive neurological symptoms or severe unremitting pain require assessment." },
    ],
    image: { src: imageAssets.neckPainMyths, alt: "Woman supporting her neck while working at a laptop" },
    references: [
      { title: "Neck Pain", publisher: "AAOS OrthoInfo", url: "https://orthoinfo.aaos.org/en/diseases--conditions/neck-pain/" },
      { title: "Neck pain", publisher: "NHS", url: "https://www.nhs.uk/conditions/neck-pain-and-stiff-neck/" },
    ],
  },
  {
    id: "disc-herniation",
    category: "Myths and facts",
    title: "Disc herniation: myths and facts",
    description: "What disc herniation can cause, who it affects and when non-operative or surgical treatment may be considered.",
    published,
    updated,
    paragraphs: ["A disc herniation can occur at different ages and may or may not cause symptoms depending on its location and whether nearby nerves are affected."],
    points: [
      { label: "Myth", text: "Disc herniations occur only in older people." },
      { label: "Fact", text: "They become more common with age but can occur in younger adults." },
      { label: "Myth", text: "Every disc herniation requires surgery." },
      { label: "Fact", text: "Many improve with time and non-operative care. Surgery may be considered for persistent disabling symptoms or important neurological loss." },
      { label: "Myth", text: "A disc herniation causes only back pain." },
      { label: "Fact", text: "It may cause pain, numbness, tingling or weakness in a leg or arm when a nerve is affected." },
      { label: "Myth", text: "Disc herniations are always caused by one injury." },
      { label: "Fact", text: "Age-related disc changes, loading, smoking, body weight, genetics and some injuries can influence risk." },
    ],
    closing: "Seek emergency assessment for new bladder or bowel dysfunction, numbness around the saddle area, or rapidly worsening weakness.",
    image: { src: imageAssets.discHerniation, alt: "Medical illustration comparing a herniated disc with a normal disc" },
    references: [
      { title: "Herniated Disk in the Lower Back", publisher: "AAOS OrthoInfo", url: "https://orthoinfo.aaos.org/en/diseases--conditions/herniated-disk-in-the-lower-back/" },
      { title: "Slipped disc", publisher: "NHS", url: "https://www.nhs.uk/conditions/slipped-disc/" },
    ],
  },
  {
    id: "back-pain",
    category: "Health tips",
    title: "Back pain tips",
    description: "Practical advice for staying active with back pain and recognising symptoms that require urgent medical assessment.",
    published,
    updated,
    paragraphs: ["Back pain is common and often improves, but the appropriate response depends on its cause, severity and associated symptoms."],
    points: [
      { label: "Stay active where possible", text: "Avoid prolonged bed rest. Modify activities temporarily and return gradually as symptoms allow." },
      { label: "Exercise regularly", text: "Walking, swimming, cycling and suitable strengthening or mobility work can support general spine health." },
      { label: "Change position regularly", text: "Avoid holding any one sitting or standing posture for very long periods." },
      { label: "Maintain general health", text: "Sleep, weight management, smoking cessation and regular activity can influence musculoskeletal health." },
    ],
    closing: "Seek emergency assessment for new bladder or bowel dysfunction, saddle numbness, weakness in both legs, major trauma or rapidly worsening neurological symptoms. Seek medical advice for fever, unexplained weight loss, night pain or persistent symptoms.",
    image: { src: imageAssets.backPain, alt: "Woman experiencing back discomfort while working at a desk" },
    references: [
      { title: "Low back pain", publisher: "World Health Organization", url: "https://www.who.int/news-room/fact-sheets/detail/low-back-pain" },
      { title: "Back pain", publisher: "NHS", url: "https://www.nhs.uk/conditions/back-pain/" },
    ],
  },
  {
    id: "nerve-compression",
    category: "Danger signs",
    title: "Signs of nerve compression in the neck",
    description: "Symptoms of cervical radiculopathy and warning signs of possible spinal-cord compression that require urgent assessment.",
    published,
    updated,
    paragraphs: [
      "A compressed or irritated cervical nerve root can cause symptoms from the neck into a shoulder, arm or hand. Compression of the spinal cord in the neck is different and can affect the hands, balance and legs.",
      "Symptoms should be assessed in context rather than attributed to the neck without examination.",
    ],
    points: [
      { label: "Possible nerve-root symptoms", text: "Sharp, burning or shooting pain from the neck into a shoulder, arm or hand." },
      { label: "Possible nerve-root symptoms", text: "Numbness, tingling or weakness in an arm, hand or fingers." },
      { label: "Possible spinal-cord symptoms", text: "Loss of hand dexterity, such as difficulty buttoning clothes or writing." },
      { label: "Possible spinal-cord symptoms", text: "New balance difficulty, an unsteady gait, or weakness or altered sensation in a leg." },
      { label: "Urgent assessment", text: "New or progressive weakness, loss of coordination or difficulty walking requires urgent medical review." },
      { label: "Emergency assessment", text: "New bladder or bowel dysfunction, numbness around the saddle area or rapidly worsening weakness requires emergency assessment." },
    ],
    closing: "Do not wait for a routine appointment when emergency warning signs are present. Attend the nearest emergency department or contact local emergency services.",
    image: { src: imageAssets.nerveCompression, alt: "Medical illustration of a herniated cervical disc compressing a nerve" },
    references: [
      { title: "Cervical Radiculopathy (Pinched Nerve)", publisher: "AAOS OrthoInfo", url: "https://orthoinfo.aaos.org/en/diseases--conditions/cervical-radiculopathy-pinched-nerve/" },
      { title: "Cervical Spondylotic Myelopathy (Spinal Cord Compression)", publisher: "AAOS OrthoInfo", url: "https://orthoinfo.aaos.org/en/diseases--conditions/cervical-spondylotic-myelopathy-spinal-cord-compression/" },
      { title: "Cauda Equina Syndrome", publisher: "AAOS OrthoInfo", url: "https://orthoinfo.aaos.org/en/diseases--conditions/cauda-equina-syndrome/" },
    ],
  },
];

export function guidePath(guide: PatientGuide): string {
  return `/patient-guides/${guide.id}`;
}
