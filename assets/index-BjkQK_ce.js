import{j as t,K as it,L as at,N as we,r as h,bD as oe,y as He,J as We,am as ze,aP as ot,aQ as lt,aS as ct,O as Ke,aX as U,B as N,az as Me,T as pt,aA as Be,d as Fe,ad as Re,V as Qe,aW as dt,bE as ut,$ as ht,U as ft}from"./optional/blueprint-editor-Bjui6GEB.js";import{C as Y,f as ke,l as K,al as Ge,ad as mt,aq as gt}from"./opfs-site-storage--nKpjz18.js";import{g as _t,d as yt,t as $t}from"./main-DZ8GSlAq.js";import{c as bt}from"./_virtual_cors-proxy-url-DfPPJwK5.js";import"./optional/vendor-codemirror-DUf9FcZI.js";import"./optional/vendor-lezer-o73s9vxN.js";import"./optional/lang-json-CGY9mt_Y.js";import"./optional/lang-php-DV1bv5gw.js";import"./optional/lang-html-VOoGgtXl.js";import"./optional/lang-css-X0KDoFVJ.js";import"./optional/lang-javascript-BD9gWh8n.js";import"./index-CpBQOlO-.js";import"./modulepreload-polyfill-B5Qt9EMX.js";import"./fs-journal-W1A1u-Vw.js";import"./config-GKBEr2VA.js";async function wt(){const e=await crypto.subtle.generateKey({name:"RSASSA-PKCS1-v1_5",modulusLength:3072,publicExponent:new Uint8Array([1,0,1]),hash:"SHA-256"},!0,["sign","verify"]),n=await crypto.subtle.exportKey("pkcs8",e.privateKey),s=await crypto.subtle.exportKey("spki",e.publicKey);return{privateKey:`-----BEGIN PRIVATE KEY-----
${btoa(String.fromCharCode(...new Uint8Array(n))).match(/.{1,64}/g).join(`
`)}
-----END PRIVATE KEY-----
`,publicKey:btoa(String.fromCharCode(...new Uint8Array(s)))}}function H(e){return e.replace(/-----BEGIN (?:RSA )?PRIVATE KEY-----[\s\S]*?-----END (?:RSA )?PRIVATE KEY-----/g,"[redacted]")}async function Rt(e){try{const n=Y(await e.documentRoot,".playground-reprint/connection.json");if(!await e.fileExists(n))return null;const s=JSON.parse(await e.readFileAsText(n));return typeof s.url=="string"?s.url:null}catch{return null}}const vt="_panel_1lebz_1",kt="_site-form_1lebz_12",xt="_intro_1lebz_19",St="_hero-input_1lebz_26",Tt="_hint_1lebz_34",Pt="_setup-title_1lebz_66",Et="_done-title_1lebz_76",jt="_setup-site_1lebz_81",Ct="_steps_1lebz_85",Nt="_manual-connection_1lebz_105",Ot="_connection-steps_1lebz_120",Lt="_key-copied_1lebz_142",Dt="_connection-details_1lebz_150",At="_error_1lebz_163",It="_error-details_1lebz_167",qt="_actions_1lebz_183",Ut="_transfer-footer_1lebz_192",Ht="_stop-button_1lebz_203",Wt="_transfer-progress_1lebz_220",zt="_progress-heading_1lebz_227",Kt="_progress-percent_1lebz_235",Mt="_progress-message_1lebz_249",Bt="_progress-details_1lebz_258",Ft="_progress-context_1lebz_277",Qt="_overflow-menu_1lebz_281",Gt="_step-content_1lebz_358",Jt="_done_1lebz_76",Yt="_done-icon_1lebz_408",Vt="_done-summary_1lebz_434",Xt="_done-actions_1lebz_440",Zt="_done-note_1lebz_447",o={panel:vt,siteForm:kt,intro:xt,heroInput:St,hint:Tt,setupTitle:Pt,doneTitle:Et,setupSite:jt,steps:Ct,manualConnection:Nt,connectionSteps:Ot,keyCopied:Lt,connectionDetails:Dt,error:At,errorDetails:It,actions:qt,transferFooter:Ut,stopButton:Ht,transferProgress:Wt,progressHeading:zt,progressPercent:Kt,progressMessage:Mt,progressDetails:Bt,progressContext:Ft,overflowMenu:Qt,stepContent:Gt,done:Jt,doneIcon:Yt,doneSummary:Vt,doneActions:Xt,doneNote:Zt};function en({progress:e}){const n=e.bytesTotal||e.filesTotal,s=e.bytesTotal?e.bytesDone:e.filesDone,a=e.overallPercent??(n&&s!==void 0?s/n*100:void 0),p=a===void 0?void 0:Math.min(100,Math.max(0,a)),d=e.bytesDone!==void 0?ke(e.bytesDone)+(e.bytesTotal?` / ${ke(e.bytesTotal)}`:""):void 0,m=e.filesDone!==void 0&&e.filesTotal!==void 0?`${e.filesDone.toLocaleString()} / ${e.filesTotal.toLocaleString()} files`:void 0,l=e.detail?.replace(/[.…]+$/,"")===e.message.replace(/[.…]+$/,"")?void 0:e.detail;return t.jsxs("div",{className:o.transferProgress,role:"status","aria-live":"polite",children:[t.jsxs("div",{className:o.progressHeading,children:[t.jsx("span",{className:o.progressPercent,children:p===void 0?"":`${Math.floor(p)}%`}),t.jsx("span",{className:o.progressMessage,children:e.message})]}),t.jsx("progress",{"aria-label":e.message,max:100,...p===void 0?{}:{value:p}}),t.jsxs("div",{className:o.progressDetails,children:[t.jsx("span",{children:d}),t.jsx("span",{children:m}),t.jsx("span",{className:o.progressContext,title:l,children:l})]})]})}async function tn(e){const n="/tmp/playground-reprint-state",s=[];let a=n,p=!1;const d=async()=>{if(await e.fileExists(n)){if(p)return"";for(const l of await e.listFiles(n))for(const S of["operation.json","pull-state/progress.json","pull-state/audit.log"]){if(p)return"";const g=Y(n,l,S);if(a=g,!await e.fileExists(g))continue;if(p)return"";const _=await e.readFileAsText(g);if(p)return"";const W=H(_);s.push(`${g}
${W.slice(-12e3)}`)}}return s.length?s.join(`

`):"No saved transfer log is available in this Playground."};let m;try{return await Promise.race([d(),new Promise(l=>{m=setTimeout(()=>{p=!0,l([...s,`Playground did not answer the log request within 10 seconds. Last path: ${a}. The worker may still be busy. These are the records received so far; try again to read the rest.`].join(`

`))},1e4)})])}finally{clearTimeout(m)}}const nn=`<?php
// Served only from a random, temporary path in the local Playground. Removed
// by the caller after the cookie round trip, including on failure.
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // The old site may have a valid session or an "auto-login already happened"
    // cookie. Ignore both for this request so Playground's auto-login plugin
    // uses the administrator selected by the Blueprint login step.
    $_COOKIE = [];
}
require __DIR__ . '/wp-load.php';
header('Content-Type: application/json');
header('Cache-Control: no-store');

// A separate GET checks that the cookies set by Playground's auto-login plugin
// were accepted. This script does not create login cookies itself.
$theme_error = wp_get_theme()->errors();
echo json_encode([
    'loggedIn' => current_user_can('manage_options'),
    'username' => wp_get_current_user()->user_login,
    'warning' => $theme_error ? wp_strip_all_tags($theme_error->get_error_message()) : null,
]);
`,sn=`<?php
/**
 * Calls Reprint's PHP API from Playground and adds browser-specific setup.
 *
 * ImportClient::run() is the command dispatcher used by Reprint's CLI. We call
 * it directly because the CLI entry point requires PHP_SAPI === 'cli', whereas
 * Playground runs PHP in WebAssembly. Reprint handles indexing, downloading,
 * mirror deletions, progress, and download checkpoints. This bridge supplies
 * Playground's paths, exclusions, size limit, and local link targets.
 *
 * The private key is supplied in the process environment, not a connection
 * setting or a generated script. Its temporary file stays outside the site directory
 * and exports. Downloaded site data can still contain private data.
 */
ini_set('max_execution_time', '0');
if (!defined('STDOUT')) define('STDOUT', fopen('php://output', 'wb'));
if (!defined('STDERR')) define('STDERR', fopen('php://stderr', 'wb'));
require 'phar:///tmp/playground-reprint.phar/packages/reprint-client/src/import.php';

use function WordPress\\Filesystem\\wp_join_unix_paths;
use WordPress\\Reprint\\Server\\Utils;

/**
 * Adds the browser's combined 2 GiB limit to Reprint's file and SQL commands.
 *
 * Reprint v0.10.13 has no option to cap the selected file bytes. This subclass
 * checks the completed file index before destructive work and checks SQL bytes
 * before each chunk is written. File downloads and their progress still use
 * ImportClient unchanged; SQL progress includes written bytes and table counts.
 * Remove these guards when Reprint exposes the limits as command options.
 */
class PlaygroundReprintClient extends ImportClient {
    private const MAX_SITE_BYTES = 2 * 1024 * 1024 * 1024;
    private ?int $site_file_bytes = null;
    private float $last_byte_update = 0;
    /** Table counters from Reprint's last SQL download record, shown beside byte counts. */
    private array $sql_tables = [];

    /**
     * Uses Reprint's stage reports to stop an oversized pull before changes.
     *
     * The selected index is ready when Reprint announces diff, mirror, or fetch.
     * Checking all three also covers resumed commands that skip earlier stages.
     * Reprint has no separate before-mirror callback, so this override checks
     * the size here and leaves file progress output to the parent method. SQL
     * records are adapted to the browser's byte/table and import-offset fields;
     * SQL import yields briefly so the page receives updates while it runs.
     */
    public function output_progress(array $data, bool $force = false): void {
        if (($data['command'] ?? '') === 'files-pull' && ($data['event'] ?? '') === 'stage'
            && in_array($data['stage'] ?? '', ['diff', 'mirror', 'fetch'], true)) {
            // The mapped index is complete and filtered here. Check before the
            // diff can delete local files or fetch their replacements, including
            // when Reprint resumes directly at a later stage.
            $this->assert_site_size();
        }
        if (($data['command'] ?? '') === 'db-pull' && is_array($data['progress'] ?? null)) {
            // Reprint reports which table it is on and, per table, an estimated
            // row count. The SQL dump has no byte total, so this is the "of"
            // the download can offer.
            $progress = $data['progress'];
            $table = $progress['current_table'] ?? null;
            $this->sql_tables = array_filter([
                'tablesDone' => $progress['items']['done'] ?? null,
                'tablesTotal' => $progress['items']['total'] ?? null,
                'tableName' => $table['name'] ?? null,
                'rowsDone' => $table['rows_done'] ?? null,
                'rowsTotal' => $table['rows_total'] ?? null,
            ], fn($value) => $value !== null);
            $this->emit_sql_progress(true);
            return;
        }
        if (($data['phase'] ?? '') === 'db-apply' && isset($data['bytes_read'])) {
            if ($force || microtime(true) - $this->last_byte_update >= 0.1) {
                $this->last_byte_update = microtime(true);
                echo json_encode(['playgroundProgress' => [
                    'phase' => 'db-apply',
                    'message' => 'Importing SQL',
                    'bytesDone' => $data['bytes_read'],
                    'bytesTotal' => $data['bytes_total'],
                    'statementsDone' => $data['statements_executed'] ?? null,
                ]], JSON_THROW_ON_ERROR) . "\\n";
                // SQL runs on the PHP worker without network waits. Yield so its
                // output reaches the page before the entire import finishes.
                usleep(1);
            }
            return;
        }
        parent::output_progress($data, $force);
    }

    /**
     * Checks incoming SQL against the combined file-and-SQL size limit.
     *
     * Reprint writes the SQL dump and tracks its resume position. It has no
     * option to cap that dump before each chunk is written, so wrap its SQL
     * callback to check the bytes first. File downloads still use Reprint's
     * unchanged writer and native progress. Restore the callback on failure.
     */
    protected function fetch_streaming(string $url, \\Reprint\\Importer\\StreamingContext $context, ?array $post_data = null, ?string $endpoint = null): void {
        if ($endpoint !== 'sql_chunk') {
            parent::fetch_streaming($url, $context, $post_data, $endpoint);
            return;
        }
        $sql_path = wp_join_unix_paths($this->state_dir, 'db.sql');
        $on_chunk = $context->on_chunk;
        $context->on_chunk = function (array $chunk) use ($on_chunk, $sql_path): void {
            if (($chunk['headers']['x-chunk-type'] ?? '') === 'sql') {
                clearstatcache(true, $sql_path);
                $this->assert_site_size(filesize($sql_path) + strlen($chunk['body'] ?? ''));
            }
            $on_chunk($chunk);
            $this->emit_sql_progress();
        };
        try {
            $this->emit_sql_progress(true);
            parent::fetch_streaming($url, $context, $post_data, $endpoint);
        } finally {
            $context->on_chunk = $on_chunk;
            $this->emit_sql_progress(true);
        }
    }

    /**
     * Reports written SQL bytes beside Reprint's table and row counters.
     *
     * Reprint's table-size estimate is not the SQL dump size. Read the actual
     * dump length, including resumed batches, without inventing a byte total.
     * Check the size limit on every chunk even when UI updates are throttled.
     */
    private function emit_sql_progress(bool $force = false): void {
        // Measure the written SQL, including resumed batches. Remote table sizes
        // do not measure SQL dump bytes, so they cannot supply a denominator.
        $sql_path = wp_join_unix_paths($this->state_dir, 'db.sql');
        clearstatcache(true, $sql_path);
        $done = is_file($sql_path) ? filesize($sql_path) : 0;
        // Check every chunk, not only the throttled UI updates. This also counts
        // SQL retained on retry and the checkpoint markers added by Reprint.
        $this->assert_site_size($done);
        if (!$force && microtime(true) - $this->last_byte_update < 0.25) return;
        $this->last_byte_update = microtime(true);
        echo json_encode(['playgroundProgress' => [
            'phase' => 'db-pull',
            'message' => 'Downloading SQL',
            'bytesDone' => $done,
        ] + $this->sql_tables], JSON_THROW_ON_ERROR) . "\\n";
    }

    /**
     * Counts the whole selected site, not just this pull's changed files.
     *
     * A repeat pull of a 3 GiB site may download only 1 KiB; it must still exceed
     * the browser limit. Read Reprint's mapped, filtered index one line at a time
     * and cache the accepted total for later stage reports in this PHP call.
     * Add written SQL bytes to the same budget, including SQL retained on retry.
     */
    private function assert_site_size(int $sql_bytes = 0): void {
        $file_bytes = $this->site_file_bytes;
        if ($file_bytes === null) {
            // Use the full selected index, not the incremental fetch list. The
            // mapped index includes followed targets and omits excluded paths.
            $index = fopen(wp_join_unix_paths($this->pull_state_directory, 'remote-index.local-map.jsonl'), 'rb');
            if ($index === false) throw new RuntimeException('Could not read the site size from the Reprint file index.');
            $file_bytes = 0;
            try {
                while (($line = fgets($index)) !== false) {
                    $entry = MappedRemoteIndexBuilder::decode_index_line($line);
                    if ($entry['type'] !== 'file') continue;
                    $file_bytes += max(0, $entry['size']);
                    if ($file_bytes > self::MAX_SITE_BYTES) break;
                }
            } finally {
                fclose($index);
            }
        }
        if ($file_bytes + $sql_bytes > self::MAX_SITE_BYTES) {
            $this->last_error_code = 'SITE_TOO_LARGE';
            throw new RuntimeException('This site exceeds Playground’s 2 GiB import limit (site files plus SQL). Use the Reprint CLI to pull this site locally.');
        }
        $this->site_file_bytes = $file_bytes;
    }
}

if (getenv('PLAYGROUND_REPRINT') !== false) {
    run_transfer();
}

/**
 * Bridges a JavaScript request to one locked Playground pull step.
 *
 * Reprint's CLI reads argv and reports command results. Playground passes JSON
 * through the PHP environment and needs a JSON result telling it which step to
 * run next. Use ReprintProcessLock and the client API for the transfer, then
 * save the bridge's next step. Reprint keeps its own download checkpoints.
 * Convert PHP warnings to failures so JavaScript can report them rather than
 * waiting for a result that never arrives.
 */
function run_transfer(): void {
    $exit_code = 0;
    set_error_handler(function (int $severity, string $message, string $file, int $line): bool {
        if (!(error_reporting() & $severity)) return false;
        throw new ErrorException($message, 0, $severity, $file, $line);
    });
    try {
        $request = json_decode(getenv('PLAYGROUND_REPRINT'), true, 512, JSON_THROW_ON_ERROR);
        putenv('PLAYGROUND_REPRINT');
        // Transfer state lives in memory for the length of the session. A pull
        // that loses it (reload, crash) starts over rather than restoring a
        // checkpoint: the site is temporary until the pull completes anyway.
        $root = wp_join_unix_paths('/tmp/playground-reprint-state', md5($request['documentRoot'] . "\\n" . $request['url']));
        if (!is_dir($root)) mkdir($root, 0700, true);
        $lock = new ReprintProcessLock($root);
        // Reprint's public API accepts a key-file path. Keep that file in /tmp,
        // never in the mirrored WordPress tree or the saved site's exports.
        $request['privateKeyPath'] = wp_join_unix_paths($root, 'key.pem');
        $operation_path = wp_join_unix_paths($root, 'operation.json');
        $operation = is_file($operation_path) ? json_decode(file_get_contents($operation_path), true, 512, JSON_THROW_ON_ERROR) : null;
        if (!in_array($request['command'], ['pull', 'finish-pull'], true)) {
            throw new RuntimeException('Unknown pull command.');
        }
        if (!$operation) {
            if ($request['command'] === 'finish-pull') {
                throw new RuntimeException('There is no pull to finish.');
            }
            $operation = ['stage' => 'preflight'];
            save_operation($operation_path, $operation);
        }
        if ($operation['stage'] === 'preflight') {
            $result = connect_site($request, $root, $operation, $lock);
        } else {
            $result = pull_site($request, $root, $operation, $lock);
        }
        if ($result['status'] === 'complete') {
            unlink($operation_path);
        } else {
            save_operation($operation_path, $operation);
        }
        echo json_encode(['playgroundReprint' => $result], JSON_THROW_ON_ERROR) . "\\n";
    } catch (Throwable $error) {
        echo json_encode(['playgroundError' => [
            'message' => $error->getMessage(),
            'stage' => $operation['stage'] ?? 'preflight',
        ]], JSON_THROW_ON_ERROR) . "\\n";
        fwrite(STDERR, $error->getMessage() . "\\n");
        $exit_code = 1;
    } finally {
        // PHP's exit() skips finally. Report failures above, but exit only
        // after removing the key and releasing the transfer lock here.
        if (isset($request['privateKeyPath']) && is_file($request['privateKeyPath'])) {
            unlink($request['privateKeyPath']);
        }
        restore_error_handler();
        if (isset($lock)) {
            $lock->close();
        }
    }
    if ($exit_code !== 0) exit($exit_code);
}

/**
 * Learns the live site's folder layout before choosing Playground destinations.
 *
 * Run Reprint's public preflight command and prepare_files_pull_options() API;
 * do not repeat their server checks or selector validation. Reprint also offers
 * pull-files, which runs preflight and files-pull together. We split those calls
 * because the remap rules depend on the paths returned by preflight, and must
 * be checked before mirroring. Save those rules for the following PHP calls.
 * On a fresh pull, reset command cursors but keep the previous remote index
 * so Reprint can download only changes.
 */
function connect_site(array $request, string $root, array &$operation, ReprintProcessLock $lock): array {
    $state = wp_join_unix_paths($root, 'pull-state');
    $files = $request['documentRoot'];
    $client = new ImportClient($request['url'], $state, $files, ['allow_http' => is_local_reprint_url($request['url'])]);
    // Reprint now returns from preflight instead of exiting PHP. Save its
    // metadata here, before advancing the operation or emitting the next stage.
    $client->run(['command' => 'preflight', 'progress' => 'jsonl'] + reprint_auth_options($request), $lock);
    $error = $client->get_preflight_error();
    if ($error !== null) {
        $failure = new RuntimeException($error['message']);
        // The saved preflight report omits cURL's error number. Keep it from
        // the client so the UI can distinguish a timeout from a TLS failure.
        echo json_encode([
            'error' => $error['message'],
            'error_code' => $error['code'],
        ] + $client->get_error_details($failure), JSON_THROW_ON_ERROR) . "\\n";
        throw $failure;
    }
    $preflight = $client->get_state()->preflight_record()['data'];
    $metadata = source_metadata($preflight);
    $metadata['routeHandlers'] = host_route_handlers($preflight);
    // A fresh pull compares against the last remote index. Reset
    // command cursors, not that index or the downloaded site files.
    // run(preflight) above loads the saved mapping fingerprints; the client
    // constructor alone starts with blank state and must not reset it.
    $client->clear_files_pull_progress();
    foreach (['progress.json', 'db.sql', 'db-session-setup.sql', 'db-tables.jsonl', 'import.sqlite', 'import.sqlite-wal', 'import.sqlite-shm', 'import.sqlite-journal'] as $file) {
        remove_tree(wp_join_unix_paths($state, $file));
    }
    $metadata['pullMappings'] = pull_path_mappings($metadata);
    // Resolve and validate every selector before file mirroring starts.
    $client->prepare_files_pull_options([
        'include' => [':abspath:', ':wp-content:'],
        'exclude' => pull_exclusions(),
        'remap' => $metadata['pullMappings'],
    ], false);
    file_put_contents(wp_join_unix_paths($root, 'source.json'), json_encode($metadata, JSON_THROW_ON_ERROR));
    $operation['stage'] = 'files-pull';
    return ['status' => 'continue', 'stage' => $operation['stage']];
}

/**
 * Runs Reprint's file and SQL commands, then configures the local site.
 *
 * ImportClient::run() already indexes, downloads, removes remote-absent local
 * paths inside today's pull selection, and resumes unfinished downloads. This
 * function supplies Playground's options and adds a files-prepare step because
 * Reprint's fetched relative links can point through remote host aliases instead
 * of their downloaded targets. Repair them using the canonical indexed paths.
 * If only that setup fails, retry setup without repeating a completed download.
 *
 * Run Reprint's db-pull and db-apply commands into a separate SQLite file so
 * WordPress cannot see half-imported tables. Once they finish, install that
 * database and write the local configuration. Return install so JavaScript
 * can verify administrator login before it sends finish-pull.
 */
function pull_site(array $request, string $root, array &$operation, ReprintProcessLock $lock): array {
    $files = $request['documentRoot'];
    $state = wp_join_unix_paths($root, 'pull-state');
    if ($operation['stage'] === 'install') {
        if ($request['command'] !== 'finish-pull') {
            return ['status' => 'install'];
        }
        // The imported SQL dump is disposable once applied.
        remove_tree(wp_join_unix_paths($state, 'db.sql'));
        return ['status' => 'complete'];
    }
    $stages = ['files-pull', 'files-prepare', 'db-pull', 'db-apply', 'configure'];
    $stage = $operation['stage'];
    if ($stage === 'configure') {
        $metadata = json_decode(file_get_contents(wp_join_unix_paths($root, 'source.json')), true, 512, JSON_THROW_ON_ERROR);
        // Only the database needs a separate destination while importing. A
        // failed SQL import must not expose half-written tables to WordPress.
        $database = $request['databasePath'];
        if (!is_dir(dirname($database))) mkdir(dirname($database), 0700, true);
        if (is_file($state . '/import.sqlite')) {
            foreach (['', '-wal', '-shm', '-journal'] as $suffix) remove_tree($database . $suffix);
            if (!rename($state . '/import.sqlite', $database)) {
                throw new RuntimeException('Could not install the imported database.');
            }
        }
        // Hosts such as WP Cloud answer some URLs in their web server rather
        // than from files: thumbnails are resized from the original on request.
        // Reprint expresses those rules as PHP; running it from wp-config.php
        // covers them here, since Playground routes missing files to index.php.
        $runtime = wp_join_unix_paths($files, '.playground-reprint', 'runtime.php');
        $handlers = $metadata['routeHandlers'] ?? '';
        if ($handlers !== '') {
            if (!is_dir(dirname($runtime))) mkdir(dirname($runtime), 0700, true);
            file_put_contents($runtime, "<?php\\n// Generated by Playground from Reprint's host rules. Do not edit.\\n"
                . "if (!defined('WP_CONTENT_DIR')) define('WP_CONTENT_DIR', dirname(__DIR__) . '/wp-content');\\n"
                . $handlers);
        } else {
            remove_tree($runtime);
        }
        $config = "<?php\\n";
        // The local copy must log failures even when the production config
        // disabled debugging. Do not print notices into pages or login headers.
        foreach (['DB_NAME' => 'wordpress', 'DB_USER' => 'root', 'DB_PASSWORD' => '', 'DB_HOST' => 'localhost', 'WP_DEBUG' => true, 'WP_DEBUG_LOG' => true, 'WP_DEBUG_DISPLAY' => false, 'WP_HOME' => $request['siteUrl'], 'WP_SITEURL' => $request['siteUrl']] as $name => $value) {
            $config .= 'if (!defined(' . var_export($name, true) . ')) define(' . var_export($name, true) . ', ' . var_export($value, true) . ");\\n";
        }
        $config .= '$table_prefix = ';
        $config .= var_export($metadata['tablePrefix'], true) . ";\\n";
        if ($handlers !== '') {
            $config .= "if (is_file(__DIR__ . '/.playground-reprint/runtime.php')) require_once __DIR__ . '/.playground-reprint/runtime.php';\\n";
        }
        $config .= "if (!defined('ABSPATH')) define('ABSPATH', __DIR__ . '/');\\nrequire_once ABSPATH . 'wp-settings.php';\\n";
        file_put_contents(wp_join_unix_paths($files, 'wp-config.php'), $config);
        $operation['stage'] = 'install';
        return ['status' => 'install'];
    }
    $metadata = json_decode(file_get_contents(wp_join_unix_paths($root, 'source.json')), true, 512, JSON_THROW_ON_ERROR);
    $client = new PlaygroundReprintClient($request['url'], $state, $files, ['allow_http' => is_local_reprint_url($request['url'])]);
    // Older transfers can have completed Reprint's download before the adapter
    // failed. Keep those bytes and proceed to local setup without another pull.
    $progress_path = wp_join_unix_paths($state, 'progress.json');
    $progress = is_file($progress_path) ? json_decode(file_get_contents($progress_path), true, 512, JSON_THROW_ON_ERROR) : [];
    if ($stage === 'files-pull' && ($progress['command'] ?? null) === 'files-pull' && ($progress['status'] ?? null) === 'complete') {
        save_pulled_links($files, $root, $metadata, $client);
        $operation['stage'] = 'files-prepare';
        return ['status' => 'continue', 'stage' => $operation['stage']];
    }
    if ($stage === 'files-prepare') {
        echo json_encode(['playgroundProgress' => ['phase' => $stage, 'message' => 'Setting up downloaded files…']]) . "\\n";
        restore_pulled_links($root);
        $operation['stage'] = 'db-pull';
        return ['status' => 'continue', 'stage' => $operation['stage']];
    }
    $client->run([
        'command' => $stage,
        'progress' => 'jsonl',
        // Reprint also selects detached plugins, MU plugins, and uploads when
        // wp-content is selected. Map them into the Playground's local layout.
        'include' => [':abspath:', ':wp-content:'],
        'exclude' => pull_exclusions(),
        'files_pull_mode' => 'mirror',
        'remap' => $metadata['pullMappings'] ?? pull_path_mappings($metadata),
        'include_host_plugins' => false,
        'follow_symlinks' => true,
        'local_followed_symlinks_root' => ':fs-root:/wp-content/.reprint-linked-files',
        'target_engine' => 'sqlite',
        'target_sqlite_path' => wp_join_unix_paths($state, 'import.sqlite'),
        'new_site_url' => $request['siteUrl'],
    ] + reprint_auth_options($request), $lock);
    if ($client->exit_code !== 0 && $client->exit_code !== 2) {
        throw new RuntimeException('Reprint stopped. Check the transfer error and retry with the same site and key.');
    }
    if ($client->exit_code === 0) {
        if ($stage === 'files-pull') save_pulled_links($files, $root, $metadata, $client);
        $operation['stage'] = $stages[array_search($stage, $stages, true) + 1];
    }
    return ['status' => 'continue', 'stage' => $operation['stage']];
}

/**
 * Supplies Reprint's authentication options only when a stage calls ImportClient::run().
 *
 * The request's path is under the private /tmp transfer directory. Local
 * setup and finish-pull never write it; run_transfer() removes it in finally
 * after both successful and failed commands, before imported plugins can run.
 */
function reprint_auth_options(array $request): array {
    if ($request['privateKey'] === null) {
        // Reprint 0.11.6 requires a credential option. The public demo
        // accepts pull requests without checking this placeholder.
        return ['secret' => 'public-demo'];
    }
    file_put_contents($request['privateKeyPath'], $request['privateKey']);
    chmod($request['privateKeyPath'], 0600);
    return ['private_key_path' => $request['privateKeyPath']];
}

/**
 * Chooses remap rules that fit a live site's folders into Playground's layout.
 *
 * Reprint's remap option performs the mapping; it cannot choose which local
 * layout this application needs. For example, map an active /srv/content to
 * /wordpress/wp-content. Put a separate bundled core/wp-content elsewhere so
 * both copies cannot write wp-content/index.php. Choose final download paths
 * before files-pull so the site files and protected local runtime share one
 * directory without a second layout assembled by flat-docroot.
 */
function pull_path_mappings(array $metadata): array {
    $paths = $metadata['paths'];
    $core = rtrim($paths['abspath'] ?? '', '/');
    $content = rtrim($paths['content_dir'] ?? '', '/');
    if ($core === '' || $content === '') {
        throw new RuntimeException('Reprint did not report the WordPress and content directories. Check its preflight report before retrying.');
    }
    // Reprint reports a directory that does not exist yet (a site without
    // mu-plugins, say) as false, not null.
    $directory = fn($reported, string $fallback) => is_string($reported) && $reported !== ''
        ? rtrim($reported, '/')
        : $fallback;
    $directories = [
        [$core, ':fs-root:'],
        [$content, ':fs-root:/wp-content'],
        [$directory($paths['plugins_dir'] ?? null, $content . '/plugins'), ':fs-root:/wp-content/plugins'],
        [$directory($paths['mu_plugins_dir'] ?? null, $content . '/mu-plugins'), ':fs-root:/wp-content/mu-plugins'],
        [$directory($paths['uploads']['basedir'] ?? null, $content . '/uploads'), ':fs-root:/wp-content/uploads'],
    ];
    $mappings = [];
    foreach ($directories as [$source, $target]) {
        if (isset($mappings[$source]) && $mappings[$source] !== $target) {
            throw new RuntimeException('Reprint reports the same directory for different WordPress folders: ' . $source);
        }
        $mappings[$source] = $target;
    }
    foreach ($directories as [$source, $target]) {
        foreach ($directories as [$parent_source, $parent_target]) {
            if (!str_starts_with($target, $parent_target . '/')) continue;
            $bundled = $parent_source . substr($target, strlen($parent_target));
            if (isset($mappings[$bundled])) continue;
            // For example: core/wp-content and the active /srv/content must not
            // both write wp-content/index.php. Keep bundled copies at distinct
            // paths, including when the active directory is nested inside one.
            $mappings[$bundled] = ':fs-root:/.reprint-source-files' . $bundled;
        }
    }
    $result = [];
    foreach ($mappings as $source => $target) $result[] = [$source, $target];
    return $result;
}

/**
 * Lists the Playground files that the current pull must leave untouched.
 *
 * Reprint's exclude option enforces these rules for both writes and mirror
 * deletions. Playground must choose the rules: the live site's wp-config.php
 * cannot replace its SQLite setup, and host cache drop-ins cannot run here.
 * Share the same list with link repair so setup cannot bypass it.
 */
function pull_exclusions(): array {
    // Production credentials, host-specific paths, and server configuration
    // must not become the Playground runtime configuration. Preserve the local
    // runtime and database while Reprint mirrors site files.
    // Exclusions apply to both incoming writes and mirror deletions.
    return [
        // These describe the saved Playground, not the WordPress site. Removing
        // wp-runtime.json makes a reload create a fresh site under the same slug.
        ':abspath:/wp-runtime.json', ':abspath:/blueprint-bundle',
        ':abspath:/.playground-reprint',
        ':abspath:/wp-config.php', ':abspath:/.htaccess', ':abspath:/.user.ini', ':abspath:/php.ini',
        ':wp-content:/database', ':wp-content:/db.php',
        ':wp-content:/object-cache.php', ':wp-content:/advanced-cache.php',
        ':wp-mu-plugins:/sqlite-database-integration', ':wp-mu-plugins:/playground-includes',
        ':wp-mu-plugins:/0-playground.php', ':wp-mu-plugins:/0-sqlite.php',
    ];
}

/**
 * Records selected links and their mapped targets for the later setup call.
 *
 * A fetched theme link can use a relative path through a remote host alias,
 * while Reprint's index names its canonical target. Read that index and use
 * Reprint's RemoteToLocalPathMapper and Utils::resolve_symlink_target_path()
 * to find the downloaded target; do not invent another path mapper. Save the
 * pairs in links.json before setup replaces any links, so a failed replacement
 * can be retried even if the original link has already been removed.
 */
function save_pulled_links(string $files, string $root, array $metadata, PlaygroundReprintClient $client): void {
    $mappings = [];
    foreach ($metadata['pullMappings'] ?? pull_path_mappings($metadata) as [$source, $target]) {
        $mappings[$source] = str_replace(':fs-root:', $files, $target);
    }
    $format = $client->get_state()->remote_path_format();
    $mapper = new RemoteToLocalPathMapper(
        $files, $format, [$metadata['paths']['abspath'], $metadata['paths']['content_dir']],
        $mappings, wp_join_unix_paths($files, 'wp-content/.reprint-linked-files')
    );
    $excluded = str_replace(
        [':abspath:', ':wp-content:', ':wp-mu-plugins:'],
        [$files, $files . '/wp-content', $files . '/wp-content/mu-plugins'],
        pull_exclusions()
    );
    $index = fopen(wp_join_unix_paths($client->pull_state_directory, 'remote-index.next.jsonl'), 'rb');
    $links = [];
    try {
        while (($line = fgets($index)) !== false) {
            $entry = json_decode($line, true, 512, JSON_THROW_ON_ERROR);
            // Intermediate aliases serve the remote host's layout. The index's
            // canonical targets let us bypass those aliases in the local copy.
            if (($entry['type'] ?? '') !== 'link' || !empty($entry['intermediate'])) continue;
            $remote = base64_decode($entry['path'], true);
            $path = $mapper->remote_path_to_local_path($remote);
            if (!is_link($path) || Utils::path_is_same_as_or_descendant_of($path, $excluded)) continue;
            // The fetch stream can send a relative target through a host alias
            // (e.g. /srv/wordpress), while the index names /wordpress/themes/….
            // Map the indexed target, not that host-specific relative spelling.
            $target = Utils::resolve_symlink_target_path($remote, base64_decode($entry['target'], true), $format);
            $target = $mapper->remote_path_to_local_path($target);
            foreach ($excluded as $excluded_path) {
                // A directory alias must not expose protected descendants either.
                if (Utils::path_is_same_as_or_descendant_of($target, [$excluded_path])
                    || Utils::path_is_same_as_or_descendant_of($excluded_path, [$target])) {
                    unlink($path);
                    continue 2;
                }
            }
            $links[] = ['path' => $path, 'target' => $target];
        }
    } finally {
        fclose($index);
    }
    file_put_contents(wp_join_unix_paths($root, 'links.json'), json_encode($links, JSON_THROW_ON_ERROR));
}

/**
 * Points saved links at their downloaded targets without copying their bytes.
 *
 * Reprint has already finished files-pull. Its fetched relative links may need
 * the mapped canonical targets saved in links.json. Rebuild only those links
 * instead of rerunning the download; OPFS preserves them when the clone is saved.
 * On a setup retry, leave local file or directory replacements alone. Report a
 * missing target rather than silently losing a theme or plugin.
 */
function restore_pulled_links(string $root): void {
    $links = json_decode(file_get_contents(wp_join_unix_paths($root, 'links.json')), true, 512, JSON_THROW_ON_ERROR);
    foreach ($links as $link) {
        $path = $link['path'];
        $target = $link['target'];
        if (!is_link($path) && file_exists($path)) continue; // Keep local replacements on a setup retry.
        if (is_link($path)) unlink($path);
        if (!is_dir(dirname($path))) mkdir(dirname($path), 0700, true);
        if (!symlink($target, $path)) throw new RuntimeException('Could not restore downloaded link: ' . $path . ' -> ' . $target);
    }
    foreach ($links as $link) {
        if (is_link($link['path']) && !file_exists($link['path'])) {
            throw new RuntimeException('Downloaded link target is missing: ' . $link['path'] . ' -> ' . $link['target'] . '. Local setup stopped; the downloaded files are retained.');
        }
    }
}

/**
 * Gets Reprint's PHP handlers for routes served by the live site's web server.
 *
 * Playground has no copy of that web server. Use runtime_manifest_for() and
 * generate_route_handler_code() rather than duplicating Reprint's host rules,
 * then load the handlers from local wp-config.php. Host detection is advisory:
 * keep the imported site even if no handlers can be generated.
 */
function host_route_handlers(array $preflight): string {
    try {
        return generate_route_handler_code(runtime_manifest_for($preflight));
    } catch (Throwable $error) {
        // Host detection is advisory. A pull must not fail on it.
        fwrite(STDERR, 'Skipping host request rules: ' . $error->getMessage() . "\\n");
        return '';
    }
}

/**
 * Extracts the preflight fields kept in the bridge's source.json record.
 *
 * Reprint already detected WordPress and returned this report. This helper
 * only adapts that report to the fields used by the bridge: folder paths for
 * file mapping, plus the table prefix for SQL import.
 * It makes no further request to the live site.
 */
function source_metadata(array $data): array {
    $prefix = $data['database']['wp']['table_prefix'] ?? null;
    if (!is_string($prefix) || !preg_match('/^[a-zA-Z0-9_]+$/', $prefix)) {
        throw new RuntimeException('The source did not report a valid WordPress table prefix.');
    }
    $paths = $data['database']['wp']['paths_urls'] ?? [];
    $paths['abspath'] ??= $data['wp_detect']['roots'][0]['path'] ?? null;
    return [
        'tablePrefix' => $prefix,
        'documentRoot' => $data['runtime']['document_root'] ?? null,
        'paths' => $paths,
    ];
}

/**
 * Saves which Playground step the next PHP call must run.
 *
 * Reprint saves its download position, but does not know the bridge's later
 * files-prepare step. Keep that step in operation.json, separate from Reprint's
 * checkpoint. Write then rename so the next call cannot read half-written JSON.
 */
function save_operation(string $path, array $operation): void {
    file_put_contents($path . '.tmp', json_encode($operation, JSON_THROW_ON_ERROR));
    rename($path . '.tmp', $path);
}

/**
 * Clears a setup path without deleting a symbolic link's target.
 *
 * The path may be a file, directory, broken link, or absent after a retry.
 * Reprint's public remove_directory_and_its_contents() accepts directories,
 * follows a link passed as the root, and suppresses removal errors. Setup needs
 * to unlink the root link itself and let errors reach run_transfer() instead
 * of continuing after failed cleanup.
 */
function remove_tree(string $path): void {
    if (is_dir($path) && !is_link($path)) {
        foreach (array_diff(scandir($path), ['.', '..']) as $name) remove_tree(wp_join_unix_paths($path, $name));
        rmdir($path);
    } elseif (file_exists($path) || is_link($path)) {
        unlink($path);
    }
}

/**
 * Chooses Reprint's allow_http option for local development URLs.
 *
 * ImportClient still validates the transport. This helper only opts loopback
 * hosts into its HTTP exception; otherwise authenticated requests require HTTPS. Reuse it for
 * both preflight and files-pull so they accept the same development servers.
 */
function is_local_reprint_url(string $url): bool {
    return in_array(parse_url($url, PHP_URL_HOST), ['127.0.0.1', 'localhost', '[::1]'], true);
}
`,rn="v0.11.6",an="d410c0b4faf6823e988435aed0f288bb43cd280dff8cef95e0c2bd3aa08e3618",Ye={version:rn,sha256:an};class M extends Error{constructor(n,s={}){super(H(n)),this.name="ReprintTransferError",this.details=s}}function on({code:e,stage:n,httpStatus:s,curlError:a}){switch(e){case"AUTH_REQUIRES_KEY":case"AUTH_NOT_CONFIGURED":case"AUTH_UNKNOWN_KEY":case"AUTH_NO_CREDENTIAL":case"EXPORT_NOT_CONFIGURED":return{title:"Add your migration key",message:"The live site has not accepted this tab’s migration key. Add it in Reprint settings, then come back here. Trying again before that will not help.",action:"settings",label:"Open Reprint settings",resumeLabel:"I’ve added the key — continue"};case"REDIRECT":return{title:"Check the live site address",message:"The site sent Reprint to a different address. Use the final WordPress address shown in your browser. Reprint does not follow redirects.",action:"address",label:"Edit site address"};case"NOT_FOUND":case"HTML_RESPONSE":case"INVALID_PREFLIGHT_RESPONSE":return{title:"The site did not return a Reprint response",message:"Check the WordPress address and make sure Reprint is active. A sign-in page or a security rule can also hide its response.",action:"install",label:"Check Reprint installation",resumeLabel:"I’ve checked the site — continue"};case"AUTH_KEY_UNSUPPORTED":return{title:"Update Reprint on the live site",message:"The live site may be using an older Reprint plugin that cannot verify migration keys. Update the plugin, then continue with the same key.",action:"plugins",label:"Open installed plugins",resumeLabel:"I’ve updated Reprint — continue"};case"AUTH_REQUIRES_TOKEN":return{title:"This host needs the Reprint CLI",message:"This host cannot verify migration keys. Use Reprint’s command-line tool with a connection token instead. Retrying in this browser will not help.",action:"cli",label:"Use the Reprint CLI"};case"SITE_TOO_LARGE":return{title:"This site is too large for a browser import",message:"The selected files and database exceed Playground’s 2 GiB limit. Use Reprint’s command-line tool to copy this site to your computer.",action:"cli",label:"Use the Reprint CLI"};case"LOGIN_FAILED":return{title:"Site cloned. Sign-in needs attention.",message:"Your files and database have been copied. Automatic admin sign-in did not finish. Open the copy to sign in yourself, or try automatic sign-in again. Your site will not be downloaded again.",action:"open-copy",label:"Open cloned site",resumeLabel:"Try signing in again"};case"AUTH_CLOCK_SKEW":return{title:"Check the clocks",message:"The live site rejected the request’s time stamp. Check your computer’s date and time. Ask your host to check the server’s clock too.",action:"resume",label:"I’ve checked the clocks — continue"};case"WORDFENCE_BLOCKED":return{title:"Wordfence blocked the connection",message:"Wait for the temporary block to expire, or check Wordfence’s firewall rules on the live site. Then resume with this tab open. You do not need a new key.",action:"wordfence",label:"Open Wordfence",resumeLabel:"Try resuming after the block clears"};case"AUTH_REQUEST_REWRITTEN":case"AUTH_HEADERS_STRIPPED":case"AUTH_CONTENT_TAMPERED":return{title:"The host is changing Reprint’s requests",message:"A proxy, firewall, or security plugin is changing the signed request before it reaches WordPress. Ask your host to pass the request path, headers, and body through unchanged. A new migration key will not help.",action:"admin",label:"Open WordPress admin",resumeLabel:"The host settings changed — continue"};case"REQUEST_TOO_LARGE":case"UNSUPPORTED_MEDIA_TYPE":return{title:"The host rejected Reprint’s request",message:"The live server rejected the request’s size or format. Ask your host to allow Reprint’s API requests before continuing. Retrying unchanged will not help.",action:"admin",label:"Open WordPress admin",resumeLabel:"The host settings changed — continue"};case"AUTH_FAILED":return{title:"The live site refused the connection",message:"The response does not confirm a key problem. Check the live site’s security rules, or ask your host why the request was refused. Keep your current migration key.",action:"admin",label:"Open WordPress admin",resumeLabel:"I’ve checked access — continue"}}return e==="CURL_ERROR"&&a!==void 0&&[6,7,16,18,28,52,55,56,61,92,95].includes(a)||e==="SERVER_ERROR"&&(s===void 0||[500,502,503,504].includes(s))||(!e||e==="HTTP_ERROR")&&[408,429,500,502,503,504].includes(s??0)?{title:"The connection was interrupted",message:"The live site may be busy or the connection may have dropped. Wait a moment, then resume. Keep this tab open so Reprint can reuse its saved download position.",action:"resume",label:"Resume cloning"}:e==="CURL_ERROR"?{title:"Check the connection to the live site",message:"Reprint could not make a secure connection. Check that the live site opens normally. Your host may need to correct its HTTPS settings. Retrying unchanged may fail again.",action:"site",label:"Open live site",resumeLabel:"I’ve checked the connection — continue"}:{title:n==="files-prepare"?"Local setup paused":"Cloning paused",message:n==="files-prepare"?"The downloaded files are still here, but Playground could not finish setting them up. Check the details below. You can retry local setup without downloading those files again.":"We could not finish this step. Check the details below before trying again. Keep this tab open to retain the current transfer.",action:"resume",label:n==="files-prepare"?"Retry local setup":"Try again"}}const ln=Ye.version,ve="/tmp/playground-reprint.phar",Ve="/tmp/playground-reprint-bridge.php",Xe=Ye.sha256;async function cn(e,n){if(n.aborted)return"unreachable";const s=new URL(ye(e));s.searchParams.set("endpoint","preflight"),s.searchParams.set("_cache_bust",crypto.randomUUID());const a=new AbortController;let p;const d=new Promise(l=>{p=()=>{l("unreachable"),a.abort()}});n.addEventListener("abort",p,{once:!0});const m=setTimeout(p,15e3);try{return await Promise.race([pn(s.href,a.signal),d])}catch{return"unreachable"}finally{clearTimeout(m),n.removeEventListener("abort",p)}}async function pn(e,n){const s=await gt(e,{credentials:"omit",cache:"no-store",signal:n},bt),a=await s.json().catch(()=>null);return s.status!==a?.code?"not-detected":s.status===403&&(a.reason==="requires_key_auth"||a.error==="Missing X-Auth-Signature header")?"configured":s.status===503&&(a.reason==="no_keys_enrolled"||a.reason==="not_configured"&&typeof a.error=="string"&&a.error.startsWith("Export not configured:")||a.error==="Export not configured. Please configure the connection token in WordPress admin under Tools > Reprint Server.")?"needs-key":"not-detected"}function J(e){const n=new URL(ye(e));return n.search="",n.pathname.endsWith("/")||(n.pathname+="/"),{site:n.href,install:new URL("wp-admin/plugin-install.php?tab=plugin-information&plugin=reprint",n).href,settings:new URL("wp-admin/tools.php?page=reprint-server",n).href,admin:new URL("wp-admin/",n).href,plugins:new URL("wp-admin/plugins.php?s=reprint",n).href,wordfence:new URL("wp-admin/admin.php?page=Wordfence",n).href}}function ye(e){const n=new URL(e.trim()),s=["localhost","127.0.0.1","[::1]"].includes(n.hostname);if(n.protocol!=="https:"&&!(s&&n.protocol==="http:")||n.username||n.password||n.hash)throw new Error("Use an HTTPS site URL without credentials or a fragment.");for(const a of n.searchParams.keys())if(a!=="reprint-api")throw new Error("Use the site URL or its ?reprint-api endpoint, without other query parameters.");return n.search="?reprint-api",n.href}function xe(e){try{return ye(e)==="https://reprint-demo.wordpress.net/?reprint-api"}catch{return!1}}async function dn(e,n,s,a,p){n=ye(n);const d=s===null&&xe(n);if(!d&&!s?.trim())throw new Error("Generate a Reprint key before pulling.");const m={preflight:[0,2,"Connecting to the live site…"],"files-pull":[2,52,"Downloading site files…"],"files-prepare":[52,55,"Setting up downloaded files…"],"db-pull":[55,70,"Downloading SQL…"],"db-apply":[70,94,"Importing SQL…"],configure:[94,96,"Configuring the imported site…"],login:[96,98,"Logging in as an administrator…"]};let l="preflight",S=0,g={message:"Starting Reprint…"};const _=f=>{f.phase&&m[f.phase]&&f.phase!==l&&(l=f.phase,K.info(`[Reprint] ${H(f.message??"")}`),g={message:f.message??g.message}),g={...g,...f};const[I,B]=m[l],ne=g.bytesTotal||g.filesTotal,k=g.bytesTotal?g.bytesDone:g.filesDone,O=g.percent!==void 0?g.percent/100:ne&&k!==void 0?k/ne:0;S=Math.max(S,I+(B-I)*Math.min(1,Math.max(0,O))),a({...g,overallPercent:S})};_(g);const W=await e.documentRoot,z=await e.absoluteUrl,D=await _t(e);await un(e,_),await e.writeFile(Ve,sn);const T=Y(W,".playground-reprint","connection.json");await e.mkdir(Y(W,".playground-reprint")),await e.writeFile(T,JSON.stringify({url:n}));let A="pull",R,c,i,y;K.info(`[Reprint ${ln}] Starting pull.`);try{for(;;){const f=await hn(e,{command:A,url:n,privateKey:s,documentRoot:W,siteUrl:z,databasePath:D},_);if(f.stage&&R!==f.stage&&(R=f.stage,_({phase:R,message:m[R]?.[2]??g.message})),f.status==="complete")break;if(p?.aborted)throw new DOMException("Pull stopped.","AbortError");if(f.status==="install"){_({phase:"login",message:m.login[2]});try{c=await Se(e,{createLocalAdmin:d})}catch(I){i=new M(I instanceof Error?I.message:String(I),{code:"LOGIN_FAILED",stage:"login"}),K.error(`[Reprint] Sign-in failed: ${i.message}`)}A="finish-pull"}}}catch(f){y=f instanceof DOMException&&f.name==="AbortError"?f:new M(H(f instanceof Error?f.message:String(f)),f instanceof M?f.details:{stage:l}),K.error(`[Reprint] Pull failed: ${y.message}`)}if(y)throw y;return a({message:"Transfer complete",overallPercent:100}),{warning:c,loginError:i}}async function Se(e,{createLocalAdmin:n=!1}={}){const s=await e.documentRoot;let a;const p=await e.run({code:`<?php
			require ${Ge(Y(s,"wp-load.php"))};
			require_once ABSPATH . 'wp-admin/includes/upgrade.php';
			wp_upgrade();
			// Theme roots and cached theme errors describe the source filesystem.
			// Rebuild them from the downloaded files without changing the active theme.
			delete_option('stylesheet_root');
			delete_option('template_root');
			delete_site_transient('theme_roots');
			wp_clean_themes_cache();
			$admins = get_users(['role' => 'administrator', 'number' => 1, 'orderby' => 'ID', 'order' => 'ASC']);
			if ($admins) {
				echo json_encode(['username' => $admins[0]->user_login]);
			} elseif (${Ge(n)}) {
				// The public demo exports no admin account. Create one only
				// in the local copy so the visitor can edit it in Playground.
				$username = 'playground-' . bin2hex(random_bytes(8));
				$user = wp_insert_user([
					'user_login' => $username,
					'user_pass' => wp_generate_password(32),
					'role' => 'administrator',
				]);
				if (is_wp_error($user)) {
					throw new RuntimeException($user->get_error_message());
				}
				echo json_encode(['username' => $username]);
			} else {
				throw new RuntimeException('The imported site has no administrator account.');
			}
		`});p.errors&&K.error(p.errors);const{username:d}=JSON.parse(p.text);await mt(e,{username:d});const m=`/.playground-reprint-login-${crypto.randomUUID()}.php`;await e.writeFile(Y(s,m),nn);try{const S=await e.request({url:m,method:"POST"});if(S.errors&&K.error(S.errors),S.httpStatusCode>=400)throw new Error("The site was imported, but administrator login failed. Check Logs.");const g=await e.request({url:m,method:"GET"});g.errors&&K.error(g.errors);let _;try{_=JSON.parse(g.text)}catch{}if(g.httpStatusCode!==200||_?.loggedIn!==!0||_?.username!==d)throw new Error("The site was imported, but administrator login failed. Check Logs.");typeof _.warning=="string"&&(a=_.warning)}finally{await e.unlink(Y(s,m))}const l=await e.request({url:"/"});return l.errors&&K.error(l.errors),(l.httpStatusCode>=400||l.httpStatusCode===200&&!l.text.trim())&&(a??=`The site was imported, but its homepage returned ${l.httpStatusCode}${l.text.trim()?"":" with an empty response"}. You are logged in as an administrator. Check Logs and the active theme.`),a&&K.error(a),await e.goTo("/wp-admin/"),a}async function un(e,n){let s=await e.fileExists(ve)?await e.readFileAsBuffer(ve):void 0;if(!s||!await Je(s)){n({message:"Downloading Reprint…"});const a=await fetch(`/assets/optional/reprint/reprint-${Xe}.phar`);if(!a.ok)throw new Error("Could not download Reprint.");if(s=new Uint8Array(await a.arrayBuffer()),!await Je(s))throw new Error("The Reprint download did not match the pinned release.")}await e.writeFile(ve,s)}async function Je(e){const n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n),a=>a.toString(16).padStart(2,"0")).join("")===Xe}async function hn(e,n,s){const a=await e.runStream({scriptPath:Ve,env:{PLAYGROUND_REPRINT:JSON.stringify(n)},usePrimaryPhp:!0});let p,d="";const m={};let l=!1;const S=async()=>{const W=a.stdout.pipeThrough(new TextDecoderStream).getReader();let z="";for(;;){const{value:D,done:T}=await W.read();z+=D??"";const A=z.split(`
`);z=A.pop(),T&&z&&A.push(z);for(const R of A)try{const c=JSON.parse(R);if(c.playgroundReprint&&(p=c.playgroundReprint),typeof c.error=="string"&&(d=H(c.error),typeof c.error_code=="string"&&(m.code=c.error_code),typeof c.http_code=="number"&&(m.httpStatus=c.http_code),typeof c.curl_errno=="number"&&(m.curlError=c.curl_errno)),c.playgroundError&&(m.stage=c.playgroundError.stage,d||=H(c.playgroundError.message)),c.playgroundProgress){const i=c.playgroundProgress,y=fn(i);s({...me(i,H(i.message)),detail:y}),l=!0}else if(c.command==="files-pull"&&c.progress?.items?.unit==="files")s({...me({phase:"files-pull",bytesDone:c.progress.bytes?.done,bytesTotal:c.progress.bytes?.total,filesDone:c.progress.items.done,filesTotal:c.progress.items.total},"Downloading site files"),detail:void 0}),l=!0;else if(c.phase==="database-records"&&typeof c.records_processed=="number"){const i=typeof c.current_table=="string"?`${c.current_table} · `:"";s({phase:"db-apply",message:"Rewriting URLs in the database",detail:`${i}${c.records_processed.toLocaleString()} records checked`}),l=!0}else c.phase==="db-apply"&&c.bytes_read!==void 0?(s(me({phase:"db-apply",bytesDone:c.bytes_read,bytesTotal:c.bytes_total},"Importing SQL")),l=!0):!l&&c.files_done!==void 0?s(me({filesDone:c.files_done,filesTotal:c.files_total},"Downloading site files")):typeof c.message=="string"&&c.status==="error"?s({message:H(c.message)}):typeof c.message=="string"&&!l&&s({detail:H(c.message)})}catch{}if(T)break}},[g,_]=await Promise.all([a.exitCode,a.stderrText,S()]);if(g!==0||!p)throw new M(H(d||_||`Reprint stopped with exit code ${g}.`),m);return p}function fn(e){const n=p=>typeof p=="number"&&Number.isFinite(p)&&p>=0?p:void 0,s=n(e.rowsDone);if(typeof e.tableName=="string"&&s!==void 0){const p=n(e.tablesDone),d=n(e.tablesTotal),m=n(e.rowsTotal),l=p!==void 0&&d?`Table ${Math.min(p+1,d)} of ${d} · `:"",S=m?`${s.toLocaleString()} of ~${m.toLocaleString()} rows`:`${s.toLocaleString()} rows`;return`${l}${e.tableName} · ${S}`}const a=n(e.statementsDone);if(a!==void 0)return`${a.toLocaleString()} statements applied`}function me(e,n){const s={message:n};typeof e.phase=="string"&&(s.phase=e.phase);for(const a of["percent","bytesDone","bytesTotal","filesDone","filesTotal"]){const p=e[a];typeof p=="number"&&Number.isFinite(p)&&p>=0&&(s[a]=p)}return s}function Nn({site:e,playground:n,isVisible:s,onBackChange:a,onCloseBlockedChange:p}){const d=it(),m=at(),l=we(r=>r.ui.cloneRequested),S=we(r=>r.ui.pendingClone),g=we(ht).map(r=>r.slug),_=S?.slug===e.slug?S:null,[W,z]=h.useState(!!_),D=l||W,[T,A]=h.useState(()=>l?l.url??"":_?.url??ge(e.slug)?.url??""),[R,c]=h.useState(()=>l?null:_?.keyPair??ge(e.slug)?.keyPair??null),[i,y]=h.useState(_?"transfer":"site"),[f,I]=h.useState(!!_),B=h.useRef(null),ne=h.useRef(null),[k,O]=h.useState(_?"manual":null),Q=h.useRef(),V=h.useRef(!1),[v,X]=h.useState(!1),q=h.useRef(!1),[le,ce]=h.useState({message:""}),[b,P]=h.useState(""),[E,se]=h.useState(!1),[Te,$e]=h.useState(""),[Pe,re]=h.useState(""),Ee=h.useRef(),[Z,Ze]=h.useState(),[je,Ce]=h.useState(!1),[Ne,pe]=h.useState(!1),[de,Oe]=h.useState(!1),w=xe(T),C=k||w?J(T):null,G=C?new URL(C.site).hostname:"",j=i==="transfer"&&b instanceof M?on(b.details):null,ue=j&&C?{settings:C.settings,install:C.install,plugins:C.plugins,admin:C.admin,wordfence:C.wordfence,site:C.site,cli:"https://github.com/WordPress/reprint#readme",address:void 0,resume:void 0,"open-copy":void 0}[j.action]:void 0,he=(k==="configured"||k==="needs-key"||k==="manual")&&!!R,ee=w||he,et=i==="key"&&!R&&!b,F=n&&e.metadata.runtimeConfiguration.networking&&Number.parseFloat(e.metadata.runtimeConfiguration.phpVersion)>=8.1,ie=i!=="site"&&i!=="install"&&i!=="transfer",Le=yt(ie&&s&&!v&&!E),ae=i==="authorize"||i==="confirm",De=!l&&t.jsxs(t.Fragment,{children:[t.jsx(dt,{show:!n}),!F&&n&&t.jsx(Re,{status:"info",isDismissible:!1,children:"Enable networking and use PHP 8.1 or newer."})]});h.useEffect(()=>{if(!s){V.current=!1;return}if(l||!n||q.current||i!=="site"||V.current)return;let r=!1;return Rt(n).then(u=>{if(r||!u||V.current)return;const x=J(u).site,$=ge(e.slug);A(x),c($?.url===x?$.keyPair:null),O("manual"),se(!1),P(""),xe(x)||y("key")}).catch(()=>{}),()=>{r=!0}},[s,n,e.slug,l,i]),h.useEffect(()=>{if(i!=="key"||R)return;let r=!1;return wt().then(u=>{r||(c(u),_e(e.slug,J(T).site,u))},u=>{r||P(`Could not generate a migration key: ${u instanceof Error?u.message:String(u)}`)}),()=>{r=!0}},[i,T,R,e.slug]),h.useEffect(()=>()=>Q.current?.abort(),[]),h.useEffect(()=>{_&&d(oe(void 0))},[_,d]),h.useEffect(()=>{if(!s)return;if(E||b){B.current?.focus();return}if(ie&&Le&&i!=="manual-key")return;const r=Array.from(ne.current?.querySelectorAll("input:not([disabled]):not([type=checkbox]), textarea[readonly]")??[]).find(u=>!u.closest("details:not([open])"));r?r.focus():B.current?.focus()},[i,s,v,E,R,k,b,ie,Le]),h.useEffect(()=>{if(!v)return;const r=u=>{u.preventDefault(),u.returnValue=""};return window.addEventListener("beforeunload",r),()=>window.removeEventListener("beforeunload",r)},[v]);const tt=r=>{V.current=!0,Q.current?.abort(),A(r),O(null),y("site"),c(null),P(""),se(!1)},nt=async()=>{if(!R||i==="copying-key")return;Q.current?.abort(),P("");const r=new AbortController;Q.current=r,ae||y("copying-key");try{await navigator.clipboard.writeText(R.publicKey),r.signal.aborted||y(u=>u==="copying-key"?"authorize":u)}catch{r.signal.aborted||y(u=>u==="copying-key"?"manual-key":u)}},Ae=async()=>{Q.current?.abort();const r=new AbortController;Q.current=r,P("");try{const u=J(T).site;A(u),O("checking");const x=await cn(u,r.signal);if(!r.signal.aborted){O(x);const $=ge(e.slug),L=!R&&$?.url===u?$.keyPair:null;L&&c(L),y(x==="configured"||x==="needs-key"?"key":"install")}}catch(u){r.signal.aborted||(O(null),y("site"),P(u instanceof Error?u.message:String(u)))}},be=h.useCallback(r=>{if(Q.current?.abort(),I(!1),P(""),i==="site"){const u=r.currentTarget.closest('[role="dialog"]');$t(u,"back",()=>{d(ft("new"))});return}i==="transfer"?y(w?"site":"key"):(V.current=!0,O(null),y("site"))},[d,w,i]),te=h.useCallback(async()=>{if(!n||!F||!ee||q.current)return;q.current=!0,y("transfer"),X(!0),P(""),se(!1),$e(""),re(""),ce({message:"Starting Reprint…",overallPercent:0});const r=new AbortController;Ee.current=r,Ce(!1),pe(!1);const u=Date.now(),x={files:0,bytes:0};try{const $=await dn(n,T,w?null:R.privateKey,L=>{L.filesTotal!==void 0&&(x.files=L.filesTotal,x.bytes=L.bytesTotal??x.bytes),ce(L)},r.signal);Ze({...x,seconds:(Date.now()-u)/1e3}),await d(He({slug:e.slug,changes:{playgroundDefinedConstants:await We(n)}})),$e($?.warning??""),se(!$?.loginError),P($?.loginError??""),O("configured"),m.autosaveTemporarySite(e.slug,{updateUrl:!0}).catch(L=>{d(ze({status:"error",title:"Couldn’t save the cloned site",message:L instanceof Error?L.message:String(L)}))})}catch($){if(O("manual"),$?.name==="AbortError"){y(w?"site":"confirm");return}const L=$ instanceof Error?$.message:String($);y("transfer"),P($ instanceof M?$:new M(L))}finally{q.current=!1,X(!1)}},[d,n,F,ee,w,e.slug,T,R,m]),st=async()=>{if(!(!n||q.current)){q.current=!0,X(!0),P(""),ce({phase:"login",message:"Signing in to the cloned site…"});try{const r=await(w?Se(n,{createLocalAdmin:!0}):Se(n));$e(r??""),await d(He({slug:e.slug,changes:{playgroundDefinedConstants:await We(n)}})),se(!0)}catch(r){P(new M(r instanceof Error?r.message:String(r),{code:"LOGIN_FAILED",stage:"login"}))}finally{q.current=!1,X(!1)}}};h.useEffect(()=>(p?.(v||f),()=>p?.(!1)),[v,f,p]),h.useEffect(()=>{_&&(z(!0),y("transfer"),I(!0))},[_]),h.useEffect(()=>{!s||!f||!F||!ee||(I(!1),d(oe(void 0)),te())},[s,f,F,ee,te,d]),h.useEffect(()=>{i==="transfer"&&!v&&!E&&!b&&!f&&!_&&y(w?"site":"key")},[i,v,E,b,f,_,w]);const Ie=async()=>{if(!ee||q.current)return;q.current=!0,y("transfer"),X(!0),P(""),ce({message:"Creating a new Playground…",overallPercent:0});const r=J(T).site,u=ut(void 0,{unavailableSlugs:g}),x=w?null:R;x&&_e(u,r,x),d(oe({slug:u,url:r,keyPair:x}));try{const $=await m.createNewTemporarySite(u,{networking:!0,phpVersion:"8.3"},{updateUrl:!1});$!==u&&(x&&_e($,r,x),d(oe({slug:$,url:r,keyPair:x})))}catch($){d(oe(void 0)),O("manual"),y(w?"site":"key"),P($ instanceof Error?$.message:String($))}finally{q.current=!1,X(!1)}},qe=h.useCallback(async()=>{if(!(!n||de)){Oe(!0),re("");try{const r=await tn(n);try{await navigator.clipboard.writeText(r),d(ze({status:"success",title:"Transfer log copied"}))}catch{re(r)}}catch(r){re(`Could not read the transfer log: ${r instanceof Error?r.message:String(r)}`)}finally{Oe(!1)}}},[n,de,d]),fe=h.useMemo(()=>n&&!l&&t.jsx(ot,{icon:lt,label:"More options",className:o.overflowMenu,popoverProps:{placement:"bottom-end"},children:({onClose:r})=>t.jsx(ct,{disabled:de,onClick:()=>{r(),qe()},children:"Copy transfer log"})}),[n,l,de,qe]);h.useLayoutEffect(()=>{if(s)return a?.(v?{title:le.phase==="login"?`Signing in to ${G}`:`${D?"Cloning":"Pulling"} ${G}`,action:fe}:E?{title:"Site cloned",hideHeader:!0}:j?.action==="open-copy"?{title:"Site cloned",action:fe}:i!=="site"||D?{action:i==="transfer"?fe:void 0,backLabel:i==="site"?"Back to New Playground":i==="transfer"&&!w?"Back to migration key":"Back to site address",onBack:be}:void 0),()=>a?.(void 0)},[s,v,E,i,D,G,be,a,fe,j?.action,le.phase,w]);const rt=()=>{j?.action==="address"?(V.current=!0,P(""),O(null),y("site")):j?.action==="open-copy"?(n?.goTo("/"),d(Qe(!1))):te()},Ue=t.jsx(Ke,{__nextHasNoMarginBottom:!0,label:"Migration key",onChange:()=>{},readOnly:!0,autoFocus:s&&i==="manual-key",onFocus:r=>r.target.select(),value:R?.publicKey??"",rows:3});return t.jsx(U,{spacing:4,className:o.panel,children:t.jsxs("div",{ref:ne,"data-step":i,className:o.stepContent,children:[b&&t.jsxs(U,{spacing:5,className:o.error,role:"alert",children:[t.jsxs(U,{spacing:2,children:[t.jsx("h3",{ref:B,tabIndex:-1,className:o.setupTitle,children:j?.title??"Couldn’t complete this step"}),t.jsx("p",{className:o.hint,children:j?.message??(b instanceof Error?b.message:b)}),!w&&j?.action==="settings"&&t.jsx(N,{variant:"link",onClick:be,children:"View migration key"})]}),!v&&j&&ee&&t.jsxs("div",{className:o.actions,children:[t.jsx(N,{variant:"primary",href:ue,target:ue?"_blank":void 0,rel:ue?"noreferrer":void 0,onClick:ue?void 0:rt,children:j.label}),j.resumeLabel&&t.jsx(N,{variant:"secondary",onClick:()=>{j.action==="open-copy"?st():te()},children:j.resumeLabel})]}),j&&b instanceof M&&t.jsxs("details",{className:o.errorDetails,children:[t.jsx("summary",{children:"Technical details"}),t.jsx("pre",{children:[b.details.code,b.details.stage&&`Stage: ${b.details.stage}`,b.details.httpStatus&&`HTTP ${b.details.httpStatus}`,b.details.curlError&&`cURL ${b.details.curlError}`,b.message].filter(Boolean).join(`
`)})]})]}),!v&&!E&&f&&!b&&t.jsx(Me,{message:"Waiting for the new Playground to boot…"}),!v&&!E&&i==="site"&&t.jsx("form",{onSubmit:r=>{r.preventDefault(),w?l?Ie():te():Ae()},children:t.jsxs(U,{spacing:4,children:[l&&t.jsx("p",{className:o.intro,children:"Copy a live site into a new Playground with Reprint. Your live site stays unchanged."}),t.jsxs(U,{spacing:2,children:[t.jsxs("div",{className:o.siteForm,children:[t.jsx(pt,{__nextHasNoMarginBottom:!0,hideLabelFromVision:!0,className:o.heroInput,autoFocus:s,label:"Live site URL",type:"url",value:T,onChange:tt,disabled:v,placeholder:"https://example.com"}),t.jsx(N,{type:"submit",variant:!w&&k&&k!=="checking"?"secondary":"primary",isBusy:k==="checking",disabled:v||!T||k==="checking"||w&&!l&&!F,children:w?l?"Clone site":"Pull site":k==="checking"?"Checking…":k?"Check again":"Check site"})]}),t.jsx("p",{className:o.hint,children:w?"No account or migration key needed.":"You’ll need admin access to this site."}),w&&De]})]})}),!v&&!E&&i==="install"&&C&&t.jsxs(U,{spacing:6,children:[t.jsxs(U,{spacing:2,children:[t.jsx("h3",{ref:B,tabIndex:-1,className:o.setupTitle,children:"Install Reprint Server"}),t.jsxs("p",{className:o.hint,children:[k==="unreachable"?"We couldn’t check Reprint on ":"Add the plugin to ",t.jsx("a",{href:C.site,target:"_blank",rel:"noreferrer",className:o.setupSite,children:G}),k==="unreachable"?". Check the address, or follow the steps below.":" so Playground can connect to your live site."]})]}),t.jsxs(U,{as:"ol",spacing:6,className:o.steps,children:[t.jsxs("li",{children:[t.jsx("a",{href:C.install,target:"_blank",rel:"noreferrer",children:"Install Reprint"}),t.jsxs("p",{className:o.hint,children:["Sign in if asked. Choose"," ",t.jsx("strong",{children:"Install Now"}),"."]})]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Activate the plugin"}),t.jsxs("p",{className:o.hint,children:["Choose ",t.jsx("strong",{children:"Activate"}),", then come back here."]})]})]}),t.jsxs(U,{spacing:4,children:[t.jsx(N,{variant:"primary",isBusy:k==="checking",disabled:k==="checking",onClick:()=>void Ae(),children:k==="checking"?"Checking…":"Check again"}),t.jsxs("div",{className:o.manualConnection,children:[t.jsx("span",{children:"Already active?"}),t.jsx(N,{variant:"link",disabled:k==="checking",onClick:()=>{O("manual"),y("key")},children:"Connect manually"})]})]})]}),!v&&!E&&ie&&C&&t.jsx("form",{onSubmit:r=>{if(r.preventDefault(),i==="confirm"){if(l){Ie();return}he&&F&&(_e(e.slug,J(T).site,R),te())}},children:t.jsxs(U,{spacing:4,children:[t.jsxs("ol",{className:o.connectionSteps,"aria-label":"Connection steps",children:[t.jsxs("li",{"aria-current":ae?void 0:"step",children:[t.jsx("h3",{ref:b?void 0:B,tabIndex:-1,className:o.setupTitle,children:"1. Copy your migration key"}),t.jsx("p",{className:o.hint,children:"You’ll paste it into Reprint on your live site."}),et&&t.jsx(Me,{message:"Generating a migration key…"}),i==="manual-key"&&t.jsxs(t.Fragment,{children:[t.jsx("p",{className:o.hint,role:"alert",children:"We couldn’t copy automatically. Select and copy the key below."}),Ue]}),t.jsxs("div",{className:o.actions,children:[t.jsx(N,{variant:ae?"secondary":"primary",disabled:!he||i==="copying-key",accessibleWhenDisabled:i==="copying-key",isBusy:i==="copying-key",onClick:()=>{i==="manual-key"?y("authorize"):nt()},children:i==="manual-key"?"I’ve copied the key":"Copy migration key"}),t.jsx("span",{className:o.keyCopied,role:"status",children:ae&&t.jsxs(t.Fragment,{children:[t.jsx(Be,{icon:Fe,size:16}),"Copied"]})})]}),R&&t.jsxs("details",{className:o.connectionDetails,children:[t.jsx("summary",{children:i==="manual-key"?"About this connection":"Show key and connection details"}),i!=="manual-key"&&Ue,t.jsx("p",{className:o.hint,children:"Only the migration key goes to your live site. The private key stays in this tab and is reused when you retry."})]})]}),t.jsxs("li",{"aria-current":i==="authorize"?"step":void 0,children:[t.jsxs("h3",{className:`${o.setupTitle} ${o.setupSite}`,children:["2. Authorize on ",G]}),t.jsxs("p",{className:o.hint,children:["Paste into"," ",t.jsx("strong",{children:"Migration Token"}),", then choose ",t.jsx("strong",{children:"Authorize client"}),"."]}),ae?t.jsx(N,{variant:i==="authorize"?"primary":"secondary",href:C.settings,target:"_blank",rel:"noreferrer",onClick:()=>y("confirm"),children:"Open Reprint settings ↗"}):t.jsx(N,{variant:"secondary",disabled:!0,children:"Open Reprint settings ↗"})]}),t.jsxs("li",{"aria-current":i==="confirm"?"step":void 0,children:[t.jsxs("h3",{className:o.setupTitle,children:["3. Return here and"," ",D?"clone":"pull"," your site"]}),t.jsx("p",{className:o.hint,children:"We’ll check access before copying your site."}),t.jsx(N,{type:"submit",variant:i==="confirm"?"primary":"secondary",disabled:i!=="confirm"||!he||!l&&!F,children:D?"I’ve authorized it — clone site":"I’ve authorized it — pull site"})]})]}),De]})}),v&&t.jsx(en,{progress:le}),v&&Ne&&t.jsxs(Re,{status:"warning",isDismissible:!1,children:[t.jsxs("p",{children:["Stop pulling ",G,"? Downloaded files stay saved, so you can resume later."]}),t.jsxs("div",{className:o.actions,children:[t.jsx(N,{variant:"primary",isDestructive:!0,onClick:()=>{Ee.current?.abort(),Ce(!0),pe(!1)},children:"Stop pulling"}),t.jsx(N,{variant:"tertiary",onClick:()=>pe(!1),children:"Keep pulling"})]})]}),v&&!Ne&&le.phase!=="login"&&t.jsxs("div",{className:o.transferFooter,children:[t.jsx("p",{className:o.hint,children:D?"Keep this tab open until the clone finishes.":"Local edits may be replaced. Keep this tab open until the pull finishes."}),t.jsx(N,{variant:"secondary",className:o.stopButton,disabled:je,onClick:()=>pe(!0),children:je?"Stopping after this step…":"Stop"})]}),Pe&&t.jsx(Ke,{label:"Transfer log",help:"Copying to the clipboard failed. Select the log and copy it manually.",readOnly:!0,value:Pe,onChange:re,rows:8,__nextHasNoMarginBottom:!0}),E&&t.jsxs("div",{className:o.done,children:[t.jsx("span",{className:o.doneIcon,children:t.jsx(Be,{icon:Fe,size:32})}),t.jsxs("h3",{ref:B,tabIndex:-1,className:o.doneTitle,children:[G," cloned"]}),Z&&t.jsx("p",{className:o.doneSummary,children:[Z.files?`${Z.files.toLocaleString()} files`:"",Z.bytes?ke(Z.bytes):"",mn(Z.seconds)].filter(Boolean).join(" · ")})]}),Te&&t.jsx(Re,{status:"warning",isDismissible:!1,children:Te}),E&&t.jsx("div",{className:o.doneActions,children:t.jsx(N,{variant:"primary",onClick:()=>{w&&n?.goTo("/"),d(Qe(!1))},children:"Open site"})}),E&&t.jsx("p",{className:o.doneNote,children:"You’re signed in as an administrator. Your live site was not changed."})]},`${ie?"connection":i}-${v}-${E}`)})}function mn(e){const n=Math.max(1,Math.round(e)),s=Math.floor(n/60);return s?`${s} min ${n%60} s`:`${n} s`}function ge(e){try{const n=JSON.parse(sessionStorage.getItem(`playground-reprint:${e}`)??"null");if(typeof n?.url=="string"&&typeof n?.keyPair?.privateKey=="string"&&typeof n?.keyPair?.publicKey=="string")return{url:J(n.url).site,keyPair:n.keyPair}}catch{}return null}function _e(e,n,s){try{sessionStorage.setItem(`playground-reprint:${e}`,JSON.stringify({url:n,keyPair:s}))}catch{}}export{Nn as SiteTransferPanel};
//# sourceMappingURL=index-BjkQK_ce.js.map
