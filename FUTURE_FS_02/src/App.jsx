import { useEffect, useMemo, useState } from "react";
import {
  getLeads,
  createLead,
  updateLead,
  deleteLead,
} from "./api";
import "./App.css";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  status: "New",
  source: "Website",
  notes: "",
};

function App() {
  const [leads, setLeads] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const response = await getLeads();
      setLeads(response.data);
    } catch (error) {
      console.error(error);
      setMessage("Unable to load leads");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const filteredLeads = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return leads;

    return leads.filter((lead) =>
      [
        lead.name,
        lead.email,
        lead.phone,
        lead.company,
        lead.status,
        lead.source,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query)
    );
  }, [leads, search]);

  const stats = {
    total: leads.length,
    new: leads.filter((lead) => lead.status === "New").length,
    contacted: leads.filter((lead) => lead.status === "Contacted").length,
    converted: leads.filter((lead) => lead.status === "Converted").length,
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const openAddForm = () => {
    setEditingId(null);
    setForm(emptyForm);
    setMessage("");
    setShowForm(true);
  };

  const openEditForm = (lead) => {
    setEditingId(lead._id);

    setForm({
      name: lead.name || "",
      email: lead.email || "",
      phone: lead.phone || "",
      company: lead.company || "",
      status: lead.status || "New",
      source: lead.source || "Website",
      notes: lead.notes || "",
    });

    setMessage("");
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingId(null);
    setForm(emptyForm);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (editingId) {
        await updateLead(editingId, form);
        setMessage("Lead updated successfully.");
      } else {
        await createLead(form);
        setMessage("New lead added successfully.");
      }

      closeForm();
      await fetchLeads();

      setTimeout(() => setMessage(""), 2500);
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
    }
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this lead?"
    );

    if (!confirmed) return;

    try {
      await deleteLead(id);
      await fetchLeads();
      setMessage("Lead deleted successfully.");

      setTimeout(() => setMessage(""), 2500);
    } catch (error) {
      console.error(error);
      setMessage("Failed to delete lead.");
    }
  };

  return (
    <div className="app-shell">

      {/* Background 3D Effects */}
      <div className="orb orb-one"></div>
      <div className="orb orb-two"></div>
      <div className="grid-background"></div>

      {/* Sidebar */}
      <aside className="sidebar glass-panel">
        <div className="brand">
          <div className="brand-icon">F</div>

          <div>
            <h2>FUTURE</h2>
            <span>CRM SYSTEM</span>
          </div>
        </div>

        <nav className="navigation">
          <div className="nav-item active">
            <span>▣</span>
            Dashboard
          </div>

          <div className="nav-item">
            <span>◈</span>
            Leads
          </div>

          <div className="nav-item">
            <span>◎</span>
            Analytics
          </div>

          <div className="nav-item">
            <span>⚙</span>
            Settings
          </div>
        </nav>

        <div className="sidebar-bottom">
          <div className="status-dot"></div>

          <div>
            <strong>System Online</strong>
            <small>API Connected</small>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">

        {/* Top Bar */}
        <header className="topbar">
          <div>
            <p className="eyebrow">FUTURE_FS_02</p>
            <h1>Lead Management</h1>
            <p className="subtitle">
              Manage, track and convert your business leads.
            </p>
          </div>

          <div className="live-badge">
            <span></span>
            LIVE SYSTEM
          </div>
        </header>

        {/* Statistics */}
        <section className="stats-grid">

          <div className="stat-card glass-panel">
            <div className="stat-icon blue">◈</div>
            <div>
              <span>Total Leads</span>
              <strong>{stats.total}</strong>
            </div>
          </div>

          <div className="stat-card glass-panel">
            <div className="stat-icon purple">✦</div>
            <div>
              <span>New Leads</span>
              <strong>{stats.new}</strong>
            </div>
          </div>

          <div className="stat-card glass-panel">
            <div className="stat-icon orange">◉</div>
            <div>
              <span>Contacted</span>
              <strong>{stats.contacted}</strong>
            </div>
          </div>

          <div className="stat-card glass-panel">
            <div className="stat-icon green">✓</div>
            <div>
              <span>Converted</span>
              <strong>{stats.converted}</strong>
            </div>
          </div>

        </section>

        {/* Leads Section */}
        <section className="leads-panel glass-panel">

          <div className="section-header">
            <div>
              <h2>Lead Database</h2>
              <p>{filteredLeads.length} records found</p>
            </div>

            <div className="actions">
              <div className="search-box">
                <span>⌕</span>

                <input
                  type="text"
                  placeholder="Search leads..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>

              <button className="primary-button" onClick={openAddForm}>
                <span>+</span>
                Add Lead
              </button>
            </div>
          </div>

          {loading ? (
            <div className="loading">
              <div className="loader"></div>
              Loading leads...
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">◇</div>
              <h3>No leads found</h3>
              <p>Add your first lead to get started.</p>

              <button className="primary-button" onClick={openAddForm}>
                + Add First Lead
              </button>
            </div>
          ) : (
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>LEAD</th>
                    <th>CONTACT</th>
                    <th>COMPANY</th>
                    <th>STATUS</th>
                    <th>SOURCE</th>
                    <th>ACTIONS</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredLeads.map((lead) => (
                    <tr key={lead._id}>

                      <td>
                        <div className="lead-info">
                          <div className="avatar">
                            {lead.name?.charAt(0).toUpperCase()}
                          </div>

                          <div>
                            <strong>{lead.name}</strong>
                            <small>{lead.phone}</small>
                          </div>
                        </div>
                      </td>

                      <td>
                        <span className="email">
                          {lead.email}
                        </span>
                      </td>

                      <td>
                        <span className="company">
                          {lead.company || "—"}
                        </span>
                      </td>

                      <td>
                        <span
                          className={`status-badge ${lead.status
                            ?.toLowerCase()
                            .replace(" ", "-")}`}
                        >
                          {lead.status}
                        </span>
                      </td>

                      <td>
                        <span className="source">
                          {lead.source}
                        </span>
                      </td>

                      <td>
                        <div className="table-actions">
                          <button
                            className="icon-button edit-button"
                            title="Edit"
                            onClick={() => openEditForm(lead)}
                          >
                            ✎
                          </button>

                          <button
                            className="icon-button delete-button"
                            title="Delete"
                            onClick={() => handleDelete(lead._id)}
                          >
                            ×
                          </button>
                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </section>

        {message && (
          <div className="toast">
            <span>✓</span>
            {message}
          </div>
        )}

      </main>

      {/* Add/Edit Modal */}
      {showForm && (
        <div className="modal-overlay" onClick={closeForm}>

          <div
            className="modal glass-panel"
            onClick={(event) => event.stopPropagation()}
          >

            <div className="modal-header">
              <div>
                <p className="eyebrow">
                  {editingId ? "UPDATE RECORD" : "NEW RECORD"}
                </p>

                <h2>
                  {editingId ? "Edit Lead" : "Create Lead"}
                </h2>
              </div>

              <button className="close-button" onClick={closeForm}>
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit}>

              <div className="form-grid">

                <div className="field">
                  <label>Full Name</label>
                  <input
                    name="name"
                    placeholder="Enter full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="field">
                  <label>Email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="field">
                  <label>Phone</label>
                  <input
                    name="phone"
                    placeholder="+91 9876543210"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="field">
                  <label>Company</label>
                  <input
                    name="company"
                    placeholder="Company name"
                    value={form.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="field">
                  <label>Status</label>

                  <select
                    name="status"
                    value={form.status}
                    onChange={handleChange}
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Qualified">Qualified</option>
                    <option value="Converted">Converted</option>
                    <option value="Lost">Lost</option>
                  </select>
                </div>

                <div className="field">
                  <label>Lead Source</label>

                  <input
                    name="source"
                    placeholder="Website"
                    value={form.source}
                    onChange={handleChange}
                  />
                </div>

              </div>

              <div className="field">
                <label>Notes</label>

                <textarea
                  name="notes"
                  placeholder="Add additional information..."
                  value={form.notes}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="modal-actions">

                <button
                  type="button"
                  className="secondary-button"
                  onClick={closeForm}
                >
                  Cancel
                </button>

                <button type="submit" className="primary-button">
                  {editingId ? "Update Lead" : "Create Lead"}
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

    </div>
  );
}

export default App;