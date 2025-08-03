#!/usr/bin/env node

/**
 * Pre-deployment verification script
 * Checks that all critical files and configurations are ready for deployment
 */

const fs = require("fs");
const path = require("path");

console.log("🔍 Burmuda Technologies - Pre-Deployment Verification\n");

const checks = [];

// Check critical files exist
const criticalFiles = [
  "package.json",
  "README.md",
  "LICENSE",
  ".gitignore",
  "netlify.toml",
  "client/App.tsx",
  "client/lib/emailService.ts",
  "client/pages/Index.tsx",
  "client/pages/Contact.tsx",
  "client/pages/Consultation.tsx",
  "EMAILJS_SETUP.md",
  "DEPLOYMENT_GUIDE.md",
];

console.log("📁 Checking critical files...");
criticalFiles.forEach((file) => {
  const exists = fs.existsSync(file);
  console.log(`${exists ? "✅" : "❌"} ${file}`);
  checks.push({ name: `File: ${file}`, passed: exists });
});

// Check package.json configuration
console.log("\n📦 Checking package.json...");
try {
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));

  const hasDevScript = pkg.scripts && pkg.scripts.dev;
  const hasBuildScript = pkg.scripts && pkg.scripts.build;
  const hasReactDep = pkg.devDependencies && pkg.devDependencies.react;
  const hasEmailJS = pkg.dependencies && pkg.dependencies["@emailjs/browser"];

  console.log(`${hasDevScript ? "✅" : "❌"} dev script configured`);
  console.log(`${hasBuildScript ? "✅" : "❌"} build script configured`);
  console.log(`${hasReactDep ? "✅" : "❌"} React dependency found`);
  console.log(`${hasEmailJS ? "✅" : "❌"} EmailJS dependency found`);

  checks.push(
    { name: "Dev script", passed: hasDevScript },
    { name: "Build script", passed: hasBuildScript },
    { name: "React dependency", passed: hasReactDep },
    { name: "EmailJS dependency", passed: hasEmailJS },
  );
} catch (error) {
  console.log("❌ package.json is invalid or missing");
  checks.push({ name: "package.json valid", passed: false });
}

// Check EmailJS configuration
console.log("\n📧 Checking EmailJS configuration...");
try {
  const emailServicePath = "client/lib/emailService.ts";
  const emailService = fs.readFileSync(emailServicePath, "utf8");

  const hasServiceId =
    emailService.includes("SERVICE_ID:") &&
    !emailService.includes("service_webcraft");
  const hasContactTemplate =
    emailService.includes("TEMPLATE_ID_CONTACT:") &&
    !emailService.includes("template_contact");
  const hasConsultationTemplate =
    emailService.includes("TEMPLATE_ID_CONSULTATION:") &&
    !emailService.includes("template_consultation");
  const hasPublicKey =
    emailService.includes("PUBLIC_KEY:") &&
    !emailService.includes("YOUR_PUBLIC_KEY");
  const hasToEmail =
    emailService.includes("TO_EMAIL:") &&
    !emailService.includes("your-business-email@example.com");

  console.log(`${hasServiceId ? "✅" : "❌"} Service ID configured`);
  console.log(
    `${hasContactTemplate ? "✅" : "❌"} Contact template configured`,
  );
  console.log(
    `${hasConsultationTemplate ? "✅" : "❌"} Consultation template configured`,
  );
  console.log(`${hasPublicKey ? "✅" : "❌"} Public key configured`);
  console.log(`${hasToEmail ? "✅" : "❌"} Email address configured`);

  checks.push(
    { name: "EmailJS Service ID", passed: hasServiceId },
    { name: "EmailJS Contact Template", passed: hasContactTemplate },
    { name: "EmailJS Consultation Template", passed: hasConsultationTemplate },
    { name: "EmailJS Public Key", passed: hasPublicKey },
    { name: "EmailJS Email Address", passed: hasToEmail },
  );
} catch (error) {
  console.log("❌ EmailJS configuration file not found or invalid");
  checks.push({ name: "EmailJS configuration", passed: false });
}

// Check netlify.toml configuration
console.log("\n🌐 Checking Netlify configuration...");
try {
  const netlifyConfig = fs.readFileSync("netlify.toml", "utf8");

  const hasBuildCommand = netlifyConfig.includes("npm run build");
  const hasPublishDir = netlifyConfig.includes("dist/spa");
  const hasSPARedirect = netlifyConfig.includes('from = "/*"');

  console.log(`${hasBuildCommand ? "✅" : "❌"} Build command configured`);
  console.log(`${hasPublishDir ? "✅" : "❌"} Publish directory configured`);
  console.log(`${hasSPARedirect ? "✅" : "❌"} SPA redirects configured`);

  checks.push(
    { name: "Netlify build command", passed: hasBuildCommand },
    { name: "Netlify publish directory", passed: hasPublishDir },
    { name: "Netlify SPA redirects", passed: hasSPARedirect },
  );
} catch (error) {
  console.log("❌ netlify.toml not found or invalid");
  checks.push({ name: "Netlify configuration", passed: false });
}

// Check documentation
console.log("\n📚 Checking documentation...");
try {
  const readme = fs.readFileSync("README.md", "utf8");
  const license = fs.readFileSync("LICENSE", "utf8");

  const readmeHasContent = readme.length > 1000;
  const licenseHasMIT = license.includes("MIT License");

  console.log(
    `${readmeHasContent ? "✅" : "❌"} README has comprehensive content`,
  );
  console.log(`${licenseHasMIT ? "✅" : "❌"} MIT License configured`);

  checks.push(
    { name: "README documentation", passed: readmeHasContent },
    { name: "MIT License", passed: licenseHasMIT },
  );
} catch (error) {
  console.log("❌ Documentation files missing");
  checks.push({ name: "Documentation", passed: false });
}

// Summary
console.log("\n" + "=".repeat(50));
console.log("📊 VERIFICATION SUMMARY");
console.log("=".repeat(50));

const passedChecks = checks.filter((check) => check.passed).length;
const totalChecks = checks.length;
const percentage = Math.round((passedChecks / totalChecks) * 100);

console.log(
  `\n✅ Passed: ${passedChecks}/${totalChecks} checks (${percentage}%)`,
);

if (percentage === 100) {
  console.log("\n🎉 PERFECT! Your project is ready for deployment!");
  console.log("\nNext steps:");
  console.log("1. Push to your new GitHub repository");
  console.log("2. Deploy to Netlify or Vercel");
  console.log("3. Test all functionality on the live site");
} else if (percentage >= 90) {
  console.log("\n🟡 MOSTLY READY! Minor issues to fix:");
  checks
    .filter((check) => !check.passed)
    .forEach((check) => {
      console.log(`   ❌ ${check.name}`);
    });
} else {
  console.log("\n🔴 NEEDS ATTENTION! Critical issues:");
  checks
    .filter((check) => !check.passed)
    .forEach((check) => {
      console.log(`   ❌ ${check.name}`);
    });
}

console.log("\n📖 For detailed setup instructions, see:");
console.log("   - NEW_REPO_SETUP.md");
console.log("   - EMAILJS_SETUP.md");
console.log("   - DEPLOYMENT_GUIDE.md");

console.log("\n🚀 Good luck with your deployment!");
